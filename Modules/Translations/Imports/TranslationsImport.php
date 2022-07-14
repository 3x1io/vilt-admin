<?php

namespace Modules\Translations\Imports;

use Maatwebsite\Excel\Concerns\ToCollection;
use Modules\Translations\Entities\Translation;
use Illuminate\Support\Collection;


class TranslationsImport implements ToCollection
{

    public function collection(Collection $rows)
    {
        unset($rows[0]);
        $getLocals = config('translations.locals');

        foreach ($rows as $row) {
            $trans = Translation::where('key', $row[1])->where('group', '*')->first();
            if ($trans) {
                $text = [];
                $i = 2;
                foreach ($getLocals as $lang => $value) {
                    $text[$lang] = $row[$i];
                    $i++;
                }

                $trans->text = $text;
                $trans->save();
            }
        }
    }
}
