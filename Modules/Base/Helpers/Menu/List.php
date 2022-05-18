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

Core::registerDashboardMenuItem(Menu::make('Group')->icon('bx bxs-circle')->route('groups.index')->can('view_any_groups'));

Core::registerDashboardMenuItem(Menu::make('Customer')->icon('bx bxs-circle')->route('customers.index')->can('view_any_customers'));

Core::registerDashboardMenuItem(Menu::make('CustomersLocation')->icon('bx bxs-circle')->route('customers_locations.index')->can('view_any_customers_locations'));

Core::registerDashboardMenuItem(Menu::make('Loader')->icon('bx bxs-circle')->route('loaders.index')->can('view_any_loaders'));
