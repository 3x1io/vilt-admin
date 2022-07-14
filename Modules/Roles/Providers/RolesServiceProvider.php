<?php

namespace Modules\Roles\Providers;

use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\ServiceProvider;
use Modules\Base\Helpers\Resources\Core;
use Modules\Base\Helpers\Resources\Lang;
use Modules\Base\Helpers\Resources\Menu;
use Illuminate\Database\Eloquent\Factory;
use Modules\Roles\Resources\UserResource;
use Modules\Roles\Resources\RolesResource;
use Modules\Roles\Console\GeneratePermission;
use Modules\Roles\Console\GeneratePermissionTable;

class RolesServiceProvider extends ServiceProvider
{
    /**
     * @var string $moduleName
     */
    protected $moduleName = 'Roles';

    /**
     * @var string $moduleNameLower
     */
    protected $moduleNameLower = 'roles';

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerConfig();
        $this->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));

        $this->commands([
            GeneratePermission::class,
            GeneratePermissionTable::class,
        ]);
        Core::loadResources($this->moduleName);
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
    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }
}
