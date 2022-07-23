<?php

namespace Modules\Settings\Pages;

use Illuminate\Support\Str;
use Modules\Base\Helpers\Resources\Menu;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Setting;
use Modules\Settings\Settings\GoogleSettings;
use Modules\Settings\Settings\SitesSettings;

class GoogleSettingsPage extends Setting {

    public ?string $setting = GoogleSettings::class;
    public ?bool $api = true;
    public ?string $path = "google_settings";
    public ?string $group = "Settings";
    public ?string $icon = "bx bxl-google";

    public  function rows(){
        return [
            Row::make('google_api_key')->label(__('Google API key'))->get(),
            Row::make('google_firebase_cr')->label(__('Firebase CREDENTIALS'))->type('file')->get(),
            Row::make('google_firebase_database_url')->label(__('Firebase Database URL'))->get(),
            Row::make('google_firebase_vapid')->label(__('Firebase VAPID KEY'))->type('textarea')->get(),
            Row::make('google_recaptcha_key')->label(__('Recaptcha Key'))->get(),
            Row::make('google_recaptcha_secret')->label(__('Recaptcha Secret'))->get(),
        ];
    }


}
