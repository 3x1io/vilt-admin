<?php

use App\Helpers\Menu\Menu;
use App\Helpers\Vilt\Core;
use App\Helpers\Vilt\Trans;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;


if (!empty(Cookie::get('lang'))) {
    $local = explode('|', Crypt::decrypt(Cookie::get('lang'), false))[1];
} else {
    $local = "en";
}

app()->setLocale($local);

Core::registerDashboardMenuItem(Menu::make('Dashboard')->icon('bx bxs-home')->route('dashboard'));
Core::registerDashboardMenuItem(Menu::make('Settings')->icon('bx bxs-cog')->route('settings'), 'Settings');
Core::registerProfileMenuItem(Menu::make('Profile')->icon('bxs-user')->route('profile.show'));
Core::registerProfileMenuItem(Menu::make('API Tokens')->icon('bxs-check-shield')->route('api-tokens.index'));
Core::registerGlobalTranslation(Trans::make('roles.sidebar')->value(__('roles.sidebar')));
Core::registerGlobalTranslation(Trans::make('users.sidebar')->value(__('users.sidebar')));
Core::registerGlobalTranslation(Trans::make('customers.sidebar')->value(__('customers.sidebar')));

Core::registerDashboardMenuItem(Menu::make('Customer')->icon('bx bxs-circle')->route('customers.index')->can('view_any_customers'));
