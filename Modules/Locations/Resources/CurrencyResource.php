<?php

namespace Modules\Locations\Resources;
use Modules\Locations\Entities\Currency;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class CurrencyResource extends Resource
{
    public $model = Currency::class;
    public $icon = "bx bxs-circle";
    public $group = "Locations";
    public $api = false;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

                                Row::make('arabic')->validation("nullable|max:255|")->label(__('Arabic '))->get(),

                                Row::make('name')->validation("required|max:255|")->label(__('Name '))->get(),

                                Row::make('iso')->validation("required|max:255|")->label(__('Iso '))->get(),

                ];
    }
}
