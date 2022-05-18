<?php

use Modules\Base\Helpers\Menu\Menu;
use Modules\Base\Helpers\Vilt\Core;
use Modules\Base\Helpers\Vilt\Trans;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;


if (!empty(Cookie::get('lang'))) {
    $local = explode('|', Crypt::decrypt(Cookie::get('lang'), false))[1];
} else {
    $local = "en";
}

app()->setLocale($local);

Core::registerDashboardMenuItem(Menu::make('Dashboard')->icon('bx bxs-home')->route('dashboard'));
Core::registerProfileMenuItem(Menu::make('Profile')->icon('bxs-user')->route('profile.show'));
Core::registerProfileMenuItem(Menu::make('API Tokens')->icon('bxs-check-shield')->route('api-tokens.index'));
