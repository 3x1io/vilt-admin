<?php

namespace Modules\Settings\Providers;

use Modules\Base\Helpers\Menu\Menu;
use Modules\Base\Helpers\Vilt\Core;
use Modules\Base\Helpers\Vilt\Trans;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factory;

include __DIR__ . '/helpers.php';

class SettingsServiceProvider extends ServiceProvider
{
    /**
     * @var string $moduleName
     */
    protected $moduleName = 'Settings';

    /**
     * @var string $moduleNameLower
     */
    protected $moduleNameLower = 'settings';

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {

        $this->registerConfig();
        $this->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));

        Core::registerDashboardMenuItem(Menu::make('Settings')->lang('settings.sidebar')->icon('bx bxs-cog')->route('settings'), 'Settings');
        Core::registerGlobalTranslation(Trans::make('settings.sidebar')->value(__('settings.sidebar')));
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
