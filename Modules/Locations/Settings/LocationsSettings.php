<?php

namespace Modules\Locations\Settings;

use Spatie\LaravelSettings\Settings;


class LocationsSettings extends Settings
{
    public string $local_country;
    public string $local_phone;
    public string $local_lang;
    public string $local_currency;
    public string $local_lat;
    public string $local_lng;

    public static function group(): string
    {
        return 'local';
    }
}
