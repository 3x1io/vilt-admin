<?php

namespace Modules\Locations\Resources;

use Modules\Locations\Entities\City;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Locations\Entities\Country;

class CityResource extends Resource
{
    public $model = City::class;
    public $icon = "bx bxs-circle";
    public $group = "Locations";
    public $api = true;

    public function rows()
    {
        return [
            Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

            Row::make('name')->validation("required|max:255")->label(__('Name '))->get(),

            Row::make('price')->label(__('Price '))->type('number')->get(),

            Row::make('country_id')->validation("required")->label(__('Country Id'))->model(Country::class)->relation('country')->type('hasOne')->get(),

            Row::make('lat')->validation("nullable|max:255")->label(__('Lat '))->get(),

            Row::make('lang')->validation("nullable|max:255")->label(__('Lang '))->get(),

        ];
    }

    public function setFilters($query, $request)
    {
        if ($request->has('country_id')) {
            $query->where('country_id', $request->get('country_id'));
        }
    }
}
