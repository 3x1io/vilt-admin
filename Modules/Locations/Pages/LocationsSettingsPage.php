<?php

namespace Modules\Locations\Pages;

use Illuminate\Support\Str;
use Modules\Base\Helpers\Resources\Menu;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Setting;
use Modules\Locations\Entities\Country;
use Modules\Locations\Entities\Currency;
use Modules\Locations\Entities\Language;
use Modules\Locations\Settings\LocationsSettings;
use Modules\Settings\Settings\SitesSettings;

class LocationsSettingsPage extends Setting {

    public ?string $setting = LocationsSettings::class;
    public ?bool $api = true;
    public ?string $path = "locations_settings";
    public ?string $group = "Locations";
    public ?string $icon = "bx bxs-cog";

    public  function rows(){
        return [
            Row::make('local_country')->label(__('Country'))->type('text')->get(),
            Row::make('local_lang')->label(__('Language'))->type('text')->get(),
            Row::make('local_currency')->label(__('Currency'))->type('text')->get(),
            Row::make('local_phone')->label(__('Phone Code'))->type('text')->get(),
            Row::make('local_lat')->label(__('Lat'))->type('text')->get(),
            Row::make('local_lng')->label(__('Lng'))->type('text')->get(),
        ];
    }


}
