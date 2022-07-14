<?php

use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Modules\Base\Helpers\Resources\Core;
use Modules\Base\Helpers\Resources\Menu;




if (!empty(Cookie::get('lang'))) {
    $local = explode('|', Crypt::decrypt(Cookie::get('lang'), false))[1];
} else {
    $local = "en";
}

app()->setLocale($local);

include __DIR__ . '/Lang.php';

// Dropdown Menu
Core::registerProfileMenuItem(Menu::make('Profile')->icon('bxs-user')->route('profile.show'));

// Admin Menu
Core::registerDashboardMenuItem(Menu::make('Dashboard')->lang('global.dashboard')->icon('bx bxs-home')->route('dashboard'));
