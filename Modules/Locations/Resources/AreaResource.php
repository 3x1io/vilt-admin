<?php

namespace Modules\Locations\Resources;
use Modules\Locations\Entities\Area;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Locations\Entities\City;

class AreaResource extends Resource
{
    public $model = Area::class;
    public $icon = "bx bxs-circle";
    public $group = "Locations";
    public $api = true;

    public function rows()
    {
        return [
            Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

            Row::make('name')->validation("required|max:255")->label(__('Name '))->get(),

            Row::make('city_id')->validation("required")->label(__('City Id'))->relation('city')->model(City::class)->type('hasOne')->get(),

            Row::make('lat')->validation("nullable|max:255")->label(__('Lat '))->get(),

            Row::make('lang')->validation("nullable|max:255")->label(__('Lang '))->get(),
       ];
    }

    public function setFilters($query, $request)
    {
        if ($request->has('city_id')) {
            $query->where('city_id', $request->get('city_id'));
        }
    }
}
