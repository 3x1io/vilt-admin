<?php

namespace Modules\Roles\Providers;

use Inertia\Inertia;
use Modules\Base\Helpers\Menu\Menu;
use Modules\Base\Helpers\Vilt\Core;
use Modules\Base\Helpers\Vilt\Trans;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factory;
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

        Core::registerDashboardMenuItem(Menu::make('Users')->lang('users.sidebar')->icon('bx bxs-user')->route('users.index')->can('view_any_users'), 'ALC');
        Core::registerDashboardMenuItem(Menu::make('Roles')->lang('roles.sidebar')->icon('bx bxs-lock-alt')->route('roles.index')->can('view_any_roles'), 'ALC');
        Core::registerGlobalTranslation(Trans::make('roles.sidebar')->value(__('roles.sidebar')));
        Core::registerGlobalTranslation(Trans::make('users.sidebar')->value(__('users.sidebar')));
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
