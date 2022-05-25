<?php

namespace Modules\Browser\Providers;

use Modules\Base\Helpers\Menu\Menu;
use Modules\Base\Helpers\Vilt\Core;
use Modules\Base\Helpers\Vilt\Trans;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factory;

class BrowserServiceProvider extends ServiceProvider
{
    /**
     * @var string $moduleName
     */
    protected $moduleName = 'Browser';

    /**
     * @var string $moduleNameLower
     */
    protected $moduleNameLower = 'browser';

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerTranslations();
        $this->registerConfig();
        $this->registerViews();
        $this->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));

        Core::registerDashboardMenuItem(Menu::make('Browser')->lang('browser.sidebar')->icon('bx bxs-folder')->route('browser'), 'Settings');
        Core::registerGlobalTranslation(Trans::make('browser.sidebar')->value(__('browser.sidebar')));
        Core::registerGlobalTranslation(Trans::make('browser.title')->value(__('browser.title')));
        Core::registerGlobalTranslation(Trans::make('browser.home')->value(__('browser.home')));
        Core::registerGlobalTranslation(Trans::make('browser.back')->value(__('browser.back')));
        Core::registerGlobalTranslation(Trans::make('browser.upload')->value(__('browser.upload')));
        Core::registerGlobalTranslation(Trans::make('browser.save')->value(__('browser.save')));
        Core::registerGlobalTranslation(Trans::make('browser.upload.message')->value(__('browser.upload.message')));
        Core::registerGlobalTranslation(Trans::make('browser.upload.button')->value(__('browser.upload.button')));
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
     * Register views.
     *
     * @return void
     */
    public function registerViews()
    {
        $viewPath = resource_path('views/modules/' . $this->moduleNameLower);

        $sourcePath = module_path($this->moduleName, 'Resources/views');

        $this->publishes([
            $sourcePath => $viewPath
        ], ['views', $this->moduleNameLower . '-module-views']);

        $this->loadViewsFrom(array_merge($this->getPublishableViewPaths(), [$sourcePath]), $this->moduleNameLower);
    }

    /**
     * Register translations.
     *
     * @return void
     */
    public function registerTranslations()
    {
        $langPath = resource_path('lang/modules/' . $this->moduleNameLower);

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, $this->moduleNameLower);
        } else {
            $this->loadTranslationsFrom(module_path($this->moduleName, 'Resources/lang'), $this->moduleNameLower);
        }
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

    private function getPublishableViewPaths(): array
    {
        $paths = [];
        foreach (\Config::get('view.paths') as $path) {
            if (is_dir($path . '/modules/' . $this->moduleNameLower)) {
                $paths[] = $path . '/modules/' . $this->moduleNameLower;
            }
        }
        return $paths;
    }
}
