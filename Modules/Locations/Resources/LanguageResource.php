<?php

namespace Modules\Locations\Resources;
use Modules\Locations\Entities\Language;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class LanguageResource extends Resource
{
    public $model = Language::class;
    public $icon = "bx bxs-circle";
    public $group = "Locations";
    public $api = false;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

                                Row::make('iso')->unique(true)->validation("required|max:255|")->label(__('Iso '))->get(),

                                Row::make('name')->validation("required|max:255|")->label(__('Name '))->get(),

                                Row::make('arabic')->validation("nullable|max:255|")->label(__('Arabic '))->get(),

                ];
    }
}
