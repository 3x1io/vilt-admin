<?php

use App\Helpers\Menu\Menu;
use App\Helpers\Vilt\Core;

Core::registerDashboardMenuItem(Menu::make('Dashboard')->icon('bx bxs-home')->route('dashboard'));
Core::registerDashboardMenuItem(Menu::make('Settings')->icon('bx bxs-cog')->route('settings'), 'Settings');
Core::registerProfileMenuItem(Menu::make('Profile')->icon('bxs-user')->route('profile.show'));
Core::registerProfileMenuItem(Menu::make('API Tokens')->icon('bxs-check-shield')->route('api-tokens.index'));

Core::registerDashboardMenuItem(Menu::make('Customer')->icon('bx bxs-circle')->route('customers.index'));
