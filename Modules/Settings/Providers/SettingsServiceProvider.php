<?php

namespace Modules\Settings\Providers;


use Illuminate\Support\ServiceProvider;
use Modules\Base\Helpers\Resources\Core;
use Modules\Base\Helpers\Resources\Lang;
use Modules\Base\Helpers\Resources\Menu;
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
        Core::registerGlobalTranslation(Lang::make('settings.sidebar')->value(__('Settings')));
        Core::registerGlobalTranslation(Lang::make('settings.title')->value(__('General Settings')));
        Core::registerGlobalTranslation(Lang::make('settings.sitemap')->value(__('Generate Sitemap')));
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
