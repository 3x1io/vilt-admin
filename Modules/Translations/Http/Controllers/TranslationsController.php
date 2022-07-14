<?php

namespace Modules\Translations\Http\Controllers;


use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Row;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\User;
use Exception;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Cookie;
use Modules\Base\Helpers\Vilt\Handler;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Vilt\AdminListing;
use Modules\Translations\Services\SaveScan;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Google\Cloud\Translate\V2\TranslateClient;
use Modules\Translations\Entities\Translation;
use Modules\Translations\Exports\TranslationsExport;
use Modules\Translations\Imports\TranslationsImport;

class TranslationsController extends Controller
{
    // use Handler;

    public $url = "translations";

    public function schema()
    {
        $getLocals = config('translations.locals');
        $loadLocals = [];
        foreach ($getLocals as $key => $value) {
            array_push($loadLocals, Row::make($key)->label($value)->get());
        }

        return [
            Row::make('id')->label(__('ID'))->edit(false)->create(false)->get(),
            Row::make('group')->label(__('Group'))->get(),
            Row::make('namespace')->label(__('Namespace'))->get(),
            Row::make('key')->label(__('Key'))->get(),
            Row::make('text')->label(__('Text'))->sorting(false)->type('schema')->list('false')->options($loadLocals)->get(),
        ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return  \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->roles($this->url);
        if (!$this->canView) {
            return inertia('403');
        }

        // create and AdminListing instance for a specific model and
        $data = AdminListing::create(Translation::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['id', 'key'],

            );

        $this->loadMedia($data);
        $this->loadFilters($request);

        $locals = [];
        $getLocals = config('translations.locals');
        foreach ($getLocals as $index => $value) {
            array_push($locals, [
                "name" => $value,
                "id" => $index
            ]);
        }

        $local = [];
        foreach ($locals as $item) {
            if ($item['id'] === app()->getLocale()) {
                $local = [
                    "name" => $item['name'],
                    "id" => $item['id']
                ];
            }
        }

        return inertia('Translation/List', $this->response($data, $this->url, ["locals" => $locals, "local" => $local]));
    }

    public function scan()
    {
        $scan = new SaveScan();
        $scan->save();

        session(["message" => __('translation.scan.message')]);
        return back();
    }

    public function change(Request $request)
    {
        $rules = [
            "language" => "required|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            Cookie::queue('lang',  $request->get('language')['id']);
            if ($request->user()) {
                if (isset($request->user()->phone)) {
                    $customer = Customer::find($request->user()->id);
                    if ($customer) {
                        $customer->lang = $request->get('language')['id'];
                        $customer->save();
                    }
                } else {
                    $user = User::find($request->user()->id);
                    if ($user) {
                        $user->lang = $request->get('language')['id'];
                        $user->save();
                    }
                }
            }

            session(['message' => __('translation.notification')]);
            return back();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param    \Illuminate\Http\Request  $request
     * @param    int  $id
     * @return  \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->roles($this->url);
        if (!$this->canEdit) {
            return inertia('403');
        }

        $record = Translation::find($id);

        $rules = [
            "group" => "sometimes|string",
            "namespace" => "sometimes|string",
            "key" => "sometimes|string",
            "text" => "sometimes|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {

            $record->update($request->all());

            $this->processUpdateMedia($request, $record);

            session(['message' => __('translation.update.message')]);
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param    int  $id
     * @return  \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->roles($this->url);
        if (!$this->canDelete) {
            return inertia('403');
        }

        $record = Translation::find($id);
        if ($record) {
            $record->delete();

            session(['message' => __('translation.delete.message')]);
            return back();
        }
    }

    public function bulk(Request $request)
    {

        $rules = [
            "action" => "required",
            "ids" => "required|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            foreach ($request->get('ids') as $key => $value) {
                $record = Translation::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $this->roles($this->url);
                        if (!$this->canDeleteAny) {
                            return inertia('403');
                        }

                        $record->delete();
                    }
                }
            }

            session(["message" => __('translation.bulk.message')]);
            return back();
        }
    }

    public function export()
    {
        return Excel::download(new TranslationsExport, 'translations.xlsx');
    }

    public function import(Request $request)
    {
        $rules = [
            "excel" => "required",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            Excel::import(new TranslationsImport, $request->file('excel'));

            session(["message" => __('Import Success')]);
            return back();
        }
    }

    public function auto()
    {
        $data = Translation::all();

        $this->loadTranslation($data);

        session(["message" => __('All Languages Has Been Translate Success')]);
        return back();
    }

    public function loadTranslation($data)
    {


        $getLocals = config('translations.locals');

        $translate = new TranslateClient([
            'key' => config('translations.google_key')
        ]);

        foreach ($data as $item) {
            $key = $item->key;
            $translation = Translation::where('key', $key)->first();

            try {
                if ($translation) {
                    $empty = false;
                    foreach ($translation->text as $transText) {
                        if (empty($transText)) {
                            $empty = true;
                        }
                    }
                    if ($empty) {
                        $text = [];
                        foreach ($getLocals as $lang => $value) {
                            $trans = $translate->translate($key, [
                                'target' => $lang
                            ]);
                            if (is_array($trans)) {
                                $text[$lang] = $trans['text'];
                            } else {
                                $text[$lang] = $key;
                            }
                        }
                        $translation->text = $text;
                        $translation->save();
                    }
                }
            } catch (Exception $e) {
            }
        }
    }
}
