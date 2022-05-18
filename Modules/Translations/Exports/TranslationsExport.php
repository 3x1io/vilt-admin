<?php

namespace Modules\Translations\Exports;

use Maatwebsite\Excel\Concerns\WithHeadings;
use Modules\Translations\Entities\Translation;
use Maatwebsite\Excel\Concerns\FromCollection;

class TranslationsExport implements FromCollection, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $transaltions = Translation::all();

        foreach ($transaltions as $item) {
            foreach ($item->text as $key => $lang) {
                $item->{$key} = $lang;
            }
            unset($item->group);
            unset($item->metadata);
            unset($item->namespace);
            unset($item->text);
            unset($item->created_at);
            unset($item->updated_at);
            unset($item->deleted_at);
        }

        return $transaltions;
    }

    public function headings(): array
    {

        $loadLocals = [];
        $getLocals = config('vilt-translations.locals');
        foreach ($getLocals as $key => $value) {
            array_push($loadLocals, $key);
        }

        return array_merge(["id", "key"], $loadLocals);
    }
}
