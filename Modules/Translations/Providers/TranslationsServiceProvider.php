<?php

namespace Modules\Translations\Providers;

use Modules\Base\Helpers\Menu\Menu;
use Modules\Base\Helpers\Vilt\Core;
use Modules\Base\Helpers\Vilt\Trans;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factory;

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

        Core::registerDashboardMenuItem(Menu::make('Translations')->lang('translation.sidebar')->icon('bx bx-globe')->route('translations.index')->can('view_any_translations'), 'Settings');
        Core::registerGlobalTranslation(Trans::make('translation.sidebar')->value(__('translation.sidebar')));
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
