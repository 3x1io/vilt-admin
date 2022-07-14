<?php

namespace Modules\Settings\Settings;

use Spatie\LaravelSettings\Settings;


class SitesSettings extends Settings
{
    public string $site_name;
    public string $site_description;
    public string $site_keywords;
    public string $site_profile;
    public string $site_logo;
    public string $site_author;
    public string $site_address;
    public string $site_email;
    public string $site_phone;
    public string $site_phone_code;
    public string $site_location;
    public string $site_currency;
    public string $site_language;
    public array $site_social;
    public array $site_menu;
    public bool $sap_functionality;

    public static function group(): string
    {
        return 'sites';
    }
}
