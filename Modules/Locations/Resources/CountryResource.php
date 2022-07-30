<?php

namespace Modules\Locations\Resources;

use Modules\Locations\Entities\Country;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class CountryResource extends Resource
{
    public $model = Country::class;
    public $icon = "bx bxs-circle";
    public $group = "Locations";
    public $api = true;

    public function rows()
    {
        return [
            Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

            Row::make('name')->search(true)->unique(true)->validation("required|max:255")->label(__('Name '))->get(),

            Row::make('code')->unique(true)->validation("required|max:255")->label(__('Code '))->get(),

            Row::make('phone')->label(__('Phone '))->type('text')->get(),

            Row::make('lat')->validation("nullable|max:255")->label(__('Lat '))->get(),

            Row::make('lang')->validation("nullable|max:255")->label(__('Lang '))->get(),

        ];
    }
}
