<?php

namespace App\Providers;

use App\Heplers\Menu\Menu;
use App\Heplers\Vlit\Core;
use App\Heplers\Menu\Sidebar;
use App\Heplers\Menu\MenuItem;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        URL::forceScheme('https');
        include(app_path('Helpers/Menu/List.php'));
    }
}
