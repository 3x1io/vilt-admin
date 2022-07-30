- [Settings Plugin](#settings-plugin)
  - [Create Setting Page](#create-setting-page)
  - [Add Setting to config](#add-setting-to-config)
  - [Generate Migration for setting](#generate-migration-for-setting)
  - [Build Your setting migration schema](#build-your-setting-migration-schema)
  - [Build a settings page](#build-a-settings-page)
  - [Use settings method](#use-settings-method)

# Settings Plugin

we are build a settings plugin using [spatie-laravel-settings](https://github.com/spatie/laravel-settings) so you can use full package feature by creating the setting class and migration and we will help you to generate a page for it

<hr>
<a name="create-setting-page"></a>
## [Create Setting Page](#create-setting-page)

to create a setting page you must create setting class first, go to `app` folder and create a new folder `Settings`

build a class extands Settings like

```php
class GeneralSettings extends Settings
{
    public string $site_name;
    
    public bool $site_active;
    
    public static function group(): string
    {
        return 'general';
    }
}
```

<hr>
<a name="add-setting-to-config"></a>
## [Add Setting to config](#add-setting-to-config)

Now, you will have to add this settings class to the settings.php config file in the settings array so it can be loaded by Laravel:

```php
    /*
     * Each settings class used in your application must be registered, you can
     * put them (manually) here.
     */
    'settings' => [
        GeneralSettings::class
    ],
```

<hr>
<a name="generate-migration-for-setting"></a>
## [Generate Migration for setting](#generate-migration-for-setting)


Each property in a settings class needs a default value that should be set in its migration. You can create a migration as such:

```bash
php artisan make:settings-migration CreateGeneralSettings
```

<hr>
<a name="build-your-setting-migration-schema"></a>
## [Build Your setting migration schema](#build-your-setting-migration-schema)

This command will create a new file in `database/settings` where you can add the properties and their default values:

```php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class CreateGeneralSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('general.site_name', 'Spatie');
        $this->migrator->add('general.site_active', true);
    }
}
```

We add the properties site_name and site_active here to the general group with values Spatie and true. More on migrations later

You should migrate your database to add the properties:

```bash
php artisan migrate
```

now you are ready for a settings page

<hr>
<a name="build-a-settings-page"></a>
## [Build a settings page](#build-a-settings-page)

it's very easy to generate a new settings page just inside your module create a folder with name `Pages` inside this folder create a new class with your settings name, use this template to extend the settings page

```php
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
```

it will generate a full settings page for you.

you can use `Actions::class`, `Modal::class` inside the page like the `Resource`

<hr>
<a name="use-settings-method"></a>
## [Use settings method](#use-settings-method)

we build a helper function for settings you can use it very simple

```php
settings(key)
```

this method take a key of setting and return the payload of it

```php
dollar(double)
```

it's take the value of money and return it on the money format
