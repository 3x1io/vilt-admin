<?php

namespace Modules\Settings\Settings;

use Spatie\LaravelSettings\Settings;


class ServicesSettings extends Settings
{
    public array $sms_vendors;
    public string $sms_gate;
    public bool $sms_active;
    public array $shipping_vendors;
    public string $shipping_gate;
    public bool $shipping_active;
    public string $fmc_key;
    public string $fmc_secret;
    public string $recap_key;
    public string $recap_secret;
    public string $google_search;
    public string $google_an;
    public string $facebook_pixcel;
    public string $facebook_chat;
    public string $facebook_app;
    public string $addthis_key;

    public static function group(): string
    {
        return 'services';
    }
}
