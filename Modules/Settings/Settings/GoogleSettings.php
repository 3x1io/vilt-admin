<?php

namespace Modules\Settings\Settings;

use Spatie\LaravelSettings\Settings;


class GoogleSettings extends Settings
{
    public string $google_api_key;
    public string $google_firebase_cr;
    public string $google_firebase_database_url;
    public string $google_firebase_vapid;
    public string $google_recaptcha_key;
    public string $google_recaptcha_secret;

    public static function group(): string
    {
        return 'google';
    }
}
