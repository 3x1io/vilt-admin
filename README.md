![Screenshot of VILT](./arts/stack.jpeg)

# VILT Admin Panel

VILT stack admin panel

## Screenshot

![Screenshot of dashboard](./arts/dashboard.png)
![Screenshot of list](./arts/list.png)
![Screenshot of profile](./arts/profile.png)
![Screenshot of 2fa](./arts/2fa.png)
![Screenshot of create](./arts/create.png)
![Screenshot of bulk](./arts/bulk.png)
![Screenshot of edit](./arts/edit.png)
![Screenshot of delete](./arts/delete.png)
![Screenshot of pagination](./arts/pagination.png)
![Screenshot of view](./arts/view.png)
![Screenshot of login](./arts/login.png)

## Installation

You can install the package via composer:

```bash
composer create-project 3x1io/vilt-admin
```

Run migration:

```bash
php artisan migrate
```

Clear Views

```bash
php artisan optimize
```

Run Yarn to development frontend and compale the assets

```bash
yarn
```

```bash
yarn run watch
```

## Generator

Our Admin panel has a generator to generate full resource by very easy command you just build your schema and the command will create a full CURD operation for you

first make a migration like

```bash
php artisan make:migration create_customer_table
```

after you fill migration with your schema run migratior

```bash
php artisan migrate
```

now it's time for building the resource just run this command with the table name 

```bash
php artisan make:vlit-resource customers
```

## Menu

you can easy add new item to the menu with magic class `Menu` to add new Menu you can add it form provider or you can add it to the file path `app\Helpers\Menu\List.php` and add

```php
Core::registerDashboardMenuItem(Menu::make('Settings')->icon('bx bxs-cog')->route('settings'), 'Settings');
```

it will generate a item on dashboard menu and you can use other method for profile dropdown menu

```php
Core::registerProfileMenuItem(Menu::make('Profile')->icon('bxs-user')->route('profile.show'));
```

you must add a route with a name before add a menu

## Media

to add a media we are use [spatie/laravel-medialibrary](https://spatie.be/docs/laravel-medialibrary/v10/introduction) and every model on the generator is ready to use with media

to add a media to your schema on your controller you will get a method `schema` on this method add a new row like this

```php
Row::make('avatar')->label('Avatar')->type('image')->list(false)->get(),
```

it will add to you a file input and handel upload of the file auto

after that go to file `resources/js/Pages/{YourModelName}/List.vue` and add the field to the 2 `form` methods like this

```js
    this.form = this.$inertia.form({
        name: "",
        phone: "",
        email: "",
        address: "",
        title: "",
        avatar: null,
    });
```

## Tasks

- JetSteam Auth ✅
- Admin Panel Design ✅
- Generator ✅
- Menu ✅
- spatie/laravel-medialibrary Integration ✅
- spatie/laravel-permission Integration
- spatie/laravel-translatable Integration
- spatie/laravel-translation-loader Integration
- spatie/laravel-settings Integration
- spatie/laravel-sitemap Integration
- spatie/laravel-backup Integration
- SpartnerNL/Laravel-Excel for auto export and import generator Integration
- Releationship
- Select Field
- Datepicker Field
- Colorpicker Field
- Iconpicker Field
- Log Viewer
- File Browser
- Form Builder
- Table Builder
- Media Library Browser

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [3x1](https://github.com/3x1io)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
