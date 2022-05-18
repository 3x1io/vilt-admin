<?php

namespace Modules\Translations\Http\Controllers;


use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Row;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Cookie;
use Modules\Base\Helpers\Vilt\Handler;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Vilt\AdminListing;
use Modules\Translations\Services\SaveScan;
use Modules\Translations\Entities\Translation;
use Modules\Translations\Exports\TranslationsExport;
use Modules\Translations\Imports\TranslationsImport;

class TranslationsController extends Controller
{
    use Handler;

    public $url = "translations";

    public function schema()
    {
        $getLocals = config('translations.locals');
        $loadLocals = [];
        foreach ($getLocals as $key => $value) {
            array_push($loadLocals, Row::make($key)->label($value)->get());
        }

        return [
            Row::make('id')->label(__('global.id'))->edit(false)->create(false)->get(),
            Row::make('group')->label(__('translation.group'))->get(),
            Row::make('namespace')->label(__('translation.namespace'))->get(),
            Row::make('key')->label(__('translation.key'))->get(),
            Row::make('text')->label(__('translation.text'))->sorting(false)->type('schema')->list('false')->options($loadLocals)->get(),
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

            // $user = User::find(auth()->user()->id);
            // $user->lang = $request->get('language')['id'];
            // $user->save();

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
}
