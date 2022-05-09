<?php

namespace App\Providers;

use App\Helpers\Menu\Menu;
use App\Helpers\Vilt\Core;
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
