<?php

namespace Modules\Translations\Resources;

use Exception;
use Illuminate\Http\Request;
use Modules\Menu\Entities\Menus;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Route;
use Modules\Base\Helpers\Resources\Row;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Action;
use Modules\Translations\Services\SaveScan;
use Modules\Base\Helpers\Resources\AddRoute;
use Modules\Base\Helpers\Resources\Resource;
use Google\Cloud\Translate\V2\TranslateClient;
use Modules\Base\Helpers\Resources\Modal;
use Modules\Translations\Entities\Translation;
use Modules\Translations\Exports\TranslationsExport;
use Modules\Translations\Imports\TranslationsImport;

class TranslationsResource extends Resource
{
    public $model = Translation::class;
    public $icon = "bx bxs-quote-alt-left";
    public $group = "Settings";
    public $resourceTitle = "Translation";

    public function rows()
    {
        $this->canCreate = false;

        $getLocals = config('translations.locals');
        $loadLocals = [];
        foreach ($getLocals as $key => $value) {
            array_push($loadLocals, Row::make($key)->label($value)->get());
        }

        return [
            Row::make('id')->label(__('ID'))->edit(false)->create(false)->get(),
            Row::make('group')->label(__('Group'))->get(),
            Row::make('namespace')->label(__('Namespace'))->get(),
            Row::make('key')->label(__('Key'))->search(true)->get(),
            Row::make('text')->label(__('Text'))->sorting(false)->type('schema')->list('false')->options($loadLocals)->get(),
        ];
    }

    public function actions()
    {
        return [
            Action::make('scan')->label(__('Scan'))->icon('bx bx-search-alt')->action('language_lines.scan')->render(),
            Action::make('translate')->label(__('Translate'))->icon('bx bxs-cloud')->action('language_lines.translate')->render(),
            Action::make('import')->label(__('Import'))->icon('bx bx-cloud-upload')->modal('import')->render(),
            Action::make('export')->label(__('Export'))->icon('bx bxs-spreadsheet')->url(url('admin/language-lines/export'))->render(),
        ];
    }

    public function modals()
    {
        return [
            Modal::make('import')->rows([
                Row::make('excel')->label(__('Excel File'))->type('image')->get()
            ])->buttons([
                Action::make('upload')->label(__('Upload'))->action('language_lines.import')->render()
            ])->title(__('Import Translations'))->render()
        ];
    }
    public function route()
    {
        return [
            AddRoute::make('scan')->path('scan')->method('scan')->type('post')->controller(static::class)->get(),
            AddRoute::make('translate')->path('translate')->method('translate')->type('post')->controller(static::class)->get(),
        ];
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

            return Alert::make(__('Import Success'))->fire();
        }
    }

    public function translate()
    {
        $data = Translation::all();

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
            } catch (\Exception $e) {
            }
        }

        return Alert::make(__('All Languages Has Been Translate Success'))->fire();
    }

    public function scan()
    {
        $scan = new SaveScan();
        $scan->save();

        return Alert::make(__('Your Languages Has Been Scan Success'))->fire();
    }
}
