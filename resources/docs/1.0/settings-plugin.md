- [Settings Plugin](#settings-plugin)
  - [Create Setting Page](#create-setting-page)
  - [Add Setting to config](#add-setting-to-config)
  - [Generate Migration for setting](#generate-migration-for-setting)
  - [Build Your setting migration schema](#build-your-setting-migration-schema)
  - [Build a settings page](#build-a-settings-page)
  - [Generate a controller for settings](#generate-a-controller-for-settings)
  - [Generate a view for settings](#generate-a-view-for-settings)
  - [Build a store controller method](#build-a-store-controller-method)
  - [Use settings method](#use-settings-method)

# Settings Plugin

we are build a settings plugin using [spatie-laravel-settings](https://github.com/spatie/laravel-settings) so you can use full package feature by creating the setting class and migration and we will help you to generate a page for it

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

## [Generate Migration for setting](#generate-migration-for-setting)


Each property in a settings class needs a default value that should be set in its migration. You can create a migration as such:

```bash
php artisan make:settings-migration CreateGeneralSettings
```

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

## [Build a settings page](#build-a-settings-page)

to build a settings page you need:

1. Settings Controller
2. Settings Route
3. Settings View


## [Generate a controller for settings](#generate-a-controller-for-settings)

first of all create a settings controller 

```bash
php artisan make:controller SettingsController
```

you will get a new controller on your app, let's add an index to return the view, and the settings to the view

```php
    public function index(){
        $settings = new GeneralSettings();

        $form = [
            Row::make('site_name')->label('Site Name')->default($settings->site_name)->type('text')->get(),
            Row::make('site_active')->label('Site Active')->default($settings->site_active)->type('switch')->get(),
        ];

        return Inertia::render('Settings/Index', [
            "rows" => $form
        ]);
    }
```

## [Generate a view for settings](#generate-a-view-for-settings)

now let's go to path `resources/js/Pages/` and create a new folder if not exists `Settings` and inside it create a vuejs component `Index.vue`

inside this Index.vue you will add next code

```js
<template>
    <app-layout title="Dashboard">
          <div class="px-6 mx-auto">
            <div class="flex justify-between my-6">
                <div>
                    <h2
                    class="text-2xl font-semibold text-gray-700 dark:text-gray-200"
                    >
                        General Settings
                    </h2>
                </div>
            </div>
            <form action="" @submit.prevent="onSubmit">
                <div class="bg-white border border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-800 rounded-xl filament-tables-container">
                <div class="p-4">
                    <ViltForm
                    v-model="form"
                    :rows = "$attrs.rows"
                    :errors = "form.errors"
                />
                </div>
            </div>
            <div class="flex justify-end">
                <div>
                    <button type="submit" class="inline-flex items-center justify-center px-4 my-2 font-medium tracking-tight text-white transition-colors border border-transparent rounded-lg shadow focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset filament-button dark:focus:ring-offset-0 h-9 focus:ring-white bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700 filament-page-button-action">
                        Save
                    </button>
                </div>
            </div>
            </form>

          </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import JetDialogModal from "@/Jetstream/DialogModal.vue";
    import JetSecondaryButton from "@/Jetstream/SecondaryButton.vue";
    import JetButton from "@/Jetstream/Button.vue";
    import JetInput from "@/Jetstream/Input.vue";
    import JetInputError from "@/Jetstream/InputError.vue";
    import JetLabel from "@/Jetstream/Label.vue";
    import ViltForm from "@/Components/Base/Rows/ViltForm.vue";

    export default defineComponent({
        components: {
            AppLayout,
            JetDialogModal,
            JetSecondaryButton,
            JetButton,
            JetInput,
            JetInputError,
            JetLabel,
            ViltForm,
        },
        computed:{
            formRows(){
                let rows = this.$attrs.rows;
                let getRows = {};
                for(let i=0; i<rows.length; i++){
                    getRows[rows[i].field] = rows[i].default;
                }

                return getRows;
            }
        },
        data(){
            return {
                errors: {},
                form: {}
            }
        },
        mounted(){
            this.form = this.$inertia.form(this.formRows);
        },
        methods: {
            onSubmit(){
                this.form.submit("post", route('settings.save'))
            },
        }
    })
</script>

```

This page will take all inputs and convert it to a form

## [Build a store controller method](#build-a-store-controller-method)

on the same `SettingsController` we need to add a new function `store()` to save the data comming form the request like this

```php 
  public function settingsSave(Request $request)
    {
        $rules = [
            "site_name" => "required|string",
            "site_active" => "required|boolean",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $settings = new SitesSettings();
            $settings->site_name = $request->get('site_name');
            $settings->site_active = $request->get('site_active');
            $settings->save();

            session(["message" => "Settings Updated Success!"]);
            return back();
        }
    }
```

and it will update the setting for you and flush the cache of it


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
