<?php

namespace io3x1\ViltRoles;

use App\Helpers\Menu\Menu;
use App\Helpers\Vilt\Core;
use io3x1\ViltRoles\Commands\GeneratePermission;
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
        $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');

        $this->publishes([
            __DIR__ . '/../config' => config_path(),
        ], 'vilt-roles-config');

        $this->publishes([
            __DIR__ . '/../resources/lang' => resource_path('lang/vendor/vilt-roles'),
        ], 'vilt-roles-translations');

        $this->commands([
            GeneratePermission::class
        ]);

        Core::registerDashboardMenuItem(Menu::make(trans('vilt-roles::roles.resource.title.home'))->icon('bx bxs-user')->route('users.index')->can('view_any_users'), 'ALC');
        Core::registerDashboardMenuItem(Menu::make('Roles')->icon('bx bxs-lock-alt')->route('roles.index')->can('view_any_roles'), 'ALC');
    }
}
