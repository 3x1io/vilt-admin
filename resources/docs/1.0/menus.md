- [Menus](#menus)
- [Dashboard Menu](#dashboard-menu)
- [Profile Dropdown](#profile-dropdown)

<a name="menus"></a>
## [Menus](#menus)

you can easily add a new item to the menu with the magic class `Menu` to add a new Menu you can add it from the provider or you can add it to the file path `Modules\Base\Helpers\Menu\List.php` and add

<hr>

<a name="dashboard-menu"></a>
## [Dashboard Menu](#dashboard-menu)

```php
Core::registerDashboardMenuItem(Menu::make('Settings')->icon('bx bxs-cog')->route('settings')->can(true), 'Settings');
```

it will generate an item on the dashboard menu and you can use another method for the profile dropdown menu

<hr>

<a name="profile-dropdow"></a>
## [Profile Dropdown](#profile-dropdow)

```php
Core::registerProfileMenuItem(Menu::make('Profile')->icon('bxs-user')->route('profile.show'));
```

you must add a route with a name before adding a menu
