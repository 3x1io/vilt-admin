- [Menus](#menus)
- [Dashboard Menu](#dashboard-menu)
- [Profile Dropdown](#profile-dropdown)

<a name="menus"></a>
## [Create Menu Item](#menus)

you can easily add a new item to the menu with the magic class `Menu::class` to add a new Menu you can add it from the provider or you can add it to the resource on the `menus()` method

```php 
public function menus()
{
    $menus = [
        $this->group => Menu::make(Str::ucfirst($this->table))->lang($this->table . '.sidebar')->icon($this->icon)->route($this->table . '.index')->can('view_any_' . $this->table)
    ];
    return array_merge($menus, $this->menu());
}
```
<hr>

<a name="dashboard-menu"></a>
## [Register Provider Dashboard Menu](#dashboard-menu)

```php
Core::registerDashboardMenuItem(Menu::make('Settings')->icon('bx bxs-cog')->route('settings')->can(true), 'Settings');
```

it will generate an item on the dashboard menu and you can use another method for the profile dropdown menu

<hr>

<a name="profile-dropdow"></a>
## [Register Provider Profile Dropdown](#profile-dropdow)

```php
Core::registerProfileMenuItem(Menu::make('Profile')->icon('bxs-user')->route('profile.show'));
```

you must add a route with a name before adding a menu
