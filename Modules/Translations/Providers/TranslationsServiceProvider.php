<?php

namespace Modules\Translations\Providers;

use Modules\Base\Helpers\Menu\Menu;
use Modules\Base\Helpers\Vilt\Trans;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\ServiceProvider;
use Modules\Base\Helpers\Resources\Core;
use Illuminate\Database\Eloquent\Factory;
use Modules\Translations\Resources\TranslationsResource;

class TranslationsServiceProvider extends ServiceProvider
{
    /**
     * @var string $moduleName
     */
    protected $moduleName = 'Translations';

    /**
     * @var string $moduleNameLower
     */
    protected $moduleNameLower = 'translations';

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerConfig();
        $this->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));

        Core::registerResource(TranslationsResource::class);


        // Core::registerGlobalTranslation(Trans::make('translations.sidebar')->value(__('Translations')));
        // Core::registerGlobalTranslation(Trans::make('translations.title')->value(__('Translations List')));
        // Core::registerGlobalTranslation(Trans::make('translations.view')->value(__('View Translation')));
        // Core::registerGlobalTranslation(Trans::make('translations.delete')->value(__('Delete Translation')));
        // Core::registerGlobalTranslation(Trans::make('translations.bulk')->value(__('Do you when to delete selected Translations?')));
        // Core::registerGlobalTranslation(Trans::make('translations.edit.title')->value(__('Update Translations')));
        // Core::registerGlobalTranslation(Trans::make('translations.scan')->value(__('Scan')));
        // Core::registerGlobalTranslation(Trans::make('translations.switch')->value(__('Switch')));
        // Core::registerGlobalTranslation(Trans::make('translations.switch.title')->value(__('Switch Current Lanuage')));
        // Core::registerGlobalTranslation(Trans::make('translations.switch.button')->value(__('Switch')));
        // Core::registerGlobalTranslation(Trans::make('translations.switch.input')->value(__('Select Language')));
        // Core::registerGlobalTranslation(Trans::make('translations.export')->value(__('Export')));
        // Core::registerGlobalTranslation(Trans::make('translations.import')->value(__('Import')));
        // Core::registerGlobalTranslation(Trans::make('translations.import.auto')->value(__('Auto Import')));
        // Core::registerGlobalTranslation(Trans::make('translations.import.title')->value(__('Import New Translations from Excel file')));
        // Core::registerGlobalTranslation(Trans::make('translations.import.input')->value(__('Please select excel file like you download form export')));
        // Core::registerGlobalTranslation(Trans::make('translations.import.button')->value(__('Import')));

    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->publishes([
            module_path($this->moduleName, 'Config/config.php') => config_path($this->moduleNameLower . '.php'),
        ], 'config');
        $this->mergeConfigFrom(
            module_path($this->moduleName, 'Config/config.php'),
            $this->moduleNameLower
        );
    }
}
