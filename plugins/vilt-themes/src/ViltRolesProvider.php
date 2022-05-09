<?php

namespace io3x1\ViltRoles;

use App\Helpers\Menu\Menu;
use App\Helpers\Vilt\Core;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;


class ViltRolesProvider extends PackageServiceProvider
{
    public static string $name = 'vilt-roles';

    public function configurePackage(Package $package): void
    {
        $package->name('vilt-roles');
    }

    public function boot(): void
    {
        parent::boot();

        Core::registerDashboardMenuItem(Menu::make('Users')->icon('bx bxs-user')->route('users.index'), 'ALC');
        Core::registerDashboardMenuItem(Menu::make('Roles')->icon('bx bxs-lock-alt')->route('roles.index'), 'ALC');

        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'vilt-roles');

        $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');

        $this->publishes([
            __DIR__ . '/../config' => config_path(),
        ], 'vilt-roles-config');

        $this->publishes([
            __DIR__ . '/../resources/lang' => resource_path('lang/vendor/vilt-roles'),
        ], 'vilt-roles-translations');
    }
}
