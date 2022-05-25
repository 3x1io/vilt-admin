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
        foreach ($rows as $row) {
            $trans = Translation::where('key', $row[1])->where('group', '*')->first();
            if ($trans) {
                $trans->text = ["ar" => $row[2], "en" => $row[3], "my" => $row[4], "pt_BR" => $row[5]];
                $trans->save();
            }
        }
    }
}
