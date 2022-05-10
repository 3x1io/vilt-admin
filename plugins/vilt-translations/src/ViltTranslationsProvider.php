<?php

namespace io3x1\ViltTranslations;

use App\Helpers\Menu\Menu;
use App\Helpers\Vilt\Core;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;
use io3x1\ViltTranslations\Resources\TranslationResource;

class ViltTranslationsProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        $package->name('vilt-translations');
    }

    protected array $resources = [
        TranslationResource::class,
    ];

    public function boot(): void
    {
        Core::registerDashboardMenuItem(Menu::make('Translations')->icon('bx bx-globe')->route('translations.index')->can('view_any_translations'), 'Settings');

        if (config('filament-translations.show-switcher')) {
        }

        $this->publishes([
            __DIR__ . '/../resources/lang' => resource_path('lang/vendor/vilt-translations'),
        ], 'vilt-translations');

        $this->publishes([
            __DIR__ . '/../config' => config_path(),
        ], 'vilt-translations-config');


        $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
    }
}
