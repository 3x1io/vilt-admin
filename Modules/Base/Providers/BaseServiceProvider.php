<?php

namespace Modules\Base\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\ServiceProvider;
use Modules\Base\Console\GenerateModule;
use Modules\Base\Helpers\Resources\Core;
use Modules\Base\Console\GenerateResource;
use Modules\Base\Helpers\Resources\Menu;

class BaseServiceProvider extends ServiceProvider
{
    /**
     * @var string $moduleName
     */
    protected $moduleName = 'Base';

    /**
     * @var string $moduleNameLower
     */
    protected $moduleNameLower = 'base';

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        if (!empty(Cookie::get('lang'))) {
            $local = explode('|', Crypt::decrypt(Cookie::get('lang'), false))[1];
        } else {
            $local = "en";
        }

        app()->setLocale($local);


        $this->commands([
            GenerateResource::class,
            GenerateModule::class,
        ]);
        $this->registerConfig();
        $this->loadViewsFrom(module_path($this->moduleName, 'Resources/views'), 'base');
        $this->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));
        URL::forceScheme('https');

        Core::registerProfileMenuItem(Menu::make('Profile')->icon('bxs-user')->route('profile.show'));
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
