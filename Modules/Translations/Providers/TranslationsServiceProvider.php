<?php

namespace Modules\Translations\Providers;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\ServiceProvider;
use Modules\Base\Helpers\Resources\Core;
use Illuminate\Database\Eloquent\Factory;
use Modules\Menu\Console\InstallMenu;
use Modules\Translations\Console\InstallTranslation;
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
        Core::loadResources($this->moduleName);

        $this->commands([
            InstallTranslation::class
        ]);
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
