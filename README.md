![Screenshot of VILT](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/stack.jpeg)

# VILT Admin Panel

VILT stack admin panel

## Screenshot

![Screenshot of dashboard](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/dashboard.png)
![Screenshot of list](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/list.png)
![Screenshot of profile](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/profile.png)
![Screenshot of 2fa](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/2fa.png)
![Screenshot of create](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/create.png)
![Screenshot of bulk](https://raw.githubusercontent.com/3x1io/vilt-admin//main/art/bulk.png)
![Screenshot of edit](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/edit.png)
![Screenshot of delete](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/delete.png)
![Screenshot of pagination](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/pagination.png)
![Screenshot of view](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/view.png)
![Screenshot of login](https://raw.githubusercontent.com/3x1io/vilt-admin/main/art/login.png)

## Installation

You can install the package via composer:

```bash
composer create-project 3x1io/vilt-admin
```

Run migration:

```bash
php artisan migrate
```

Go to route `/register` and create a new account

new run this command to generate main role

```bash
php artisan vilt-roles:install
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

you can now login to the admin from `/login`

## Generator

Our Admin panel has a generator to generate full resource by very easy command you just build your schema and the command will create a full CURD operation and APIs for you.

thanks for [Infyom API Generator](https://infyom.com/open-source/laravelgenerator/docs/introduction)

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
php artisan make:vilt-resource customers
```

if you don't need to generate APIs you can use flag `-A`, but use must build your relations inside the model

```bash
php artisan make:vilt-resource customers -A
```

## Rows

we are using Rows ans Schema on every controller we build to manage the form builder and we have a lot of methods and types for this rows

let's know more about methods first

`label(string)` the label of the row on the view you can use `__('string')` as a label to translations
`placeholder(string)` the label for placeholder of input
`sorting(bool)` the set if the row is sorting or not
`list(bool)` active the row on the table
`view(bool)` active the row on the view modal
`create(bool)` active the row on the create form
`edit(bool)` active the row on the edit form

that's the main methods but we have some custome methods with selected type of the row so let's speaking about types

Main Types

`text`, `number`, `password`, `color`

## Select Row

we use [multiselect vue3](https://github.com/SuadeLabs/vue3-multiselect) component for this it's return an object for selected value and we use 4 methos for it `options(array)` it's take array of vars like `["first", "last"]` or

```php
[
    [
        "name" => "first"
        "id" => 1
    ],
    [
        "name" => "last"
        "id" => 2
    ]
]
```

or

```php
App\Models\User::all()->toArray()
```

on this case you must use 2 methods other `track_by_name(string)` and `track_by_id(string)` takes the name of the name prop and id prop

and the last for this type you can use method `multi(bool)` to select if it's multi select or not

we are use this type as 2 more types `relation` & `hasOne` to build a relations on database

EX:

```php
Row::make('options')->type('select')->options([
    [
        "name" => "first"
        "id" => 1
    ],
    [
        "name" => "last"
        "id" => 2
    ]
])->track_by_name('name')->track_by_id('id')->multi(true)
```

## Date Row

we are use [flatpacker](https://github.com/ankurk91/vue-flatpickr-component) as a date picker

EX:

```php
Row::make('start_date')->type('datetime')
```

```php
Row::make('start_date')->type('time')
```

```php
Row::make('start_date')->type('date')
```

## Switch Row

we are use [toggle](https://github.com/vueform/toggle) as a switch and bool and we add a `reactive(bool)` method to make the fileds hide and show when the switch value change and you select the field reactive with by method `row(string)`

EX:

```php
Row::make('activated')->type('switch')
```

```php
Row::make('password')->type('password')->reactive(true)->row('activated')
```

## Menu

you can easy add new item to the menu with magic class `Menu` to add new Menu you can add it form provider or you can add it to the file path `Modules\Base\Helpers\Menu\List.php` and add

```php
Core::registerDashboardMenuItem(Menu::make('Settings')->icon('bx bxs-cog')->route('settings')->can(true), 'Settings');
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

## Vilt Roles

we build a plugin for user ACL build in [spatie/laravel-permission](https://spatie.be/docs/laravel-permission) so you can use full package feature and we build some methods to help you, on every `List.vue` you will get a 6 var

```js
canView //= view_TABLE on permission table
canViewAny //= view_any_TABLE on permission table
canCreate //= create_TABLE on permission table
canEdit //= update_TABLE on permission table
canDelete //= delete_TABLE on permission table
canDeleteAny //= delete_any_TABLE on permission table
```

so you can use it to handle what end user see when he has a selected permission.

and for menus you can handle permission useing `->can()` with the permission name init

you can generate a permission for selected table if not exists and append it to main admin role using this command

```bash
php artisan vilt-roles:generate table
```

where `table` is the name of the table you when to use it

## Vilt Translations

we build a translations loader that load transaltions form database and you can scan current translations and export it to excel sheet and import it agian to the system.

you can pass the translations as a global by adding this line to the file  `Modules\Base\Helpers\Menu\List.php` or on Any service Provider

```php
Core::registerGlobalTranslation(Trans::make('roles.sidebar')->value(__('roles.sidebar')));
```

you can now access this transaltions by key from `trans` prop and you can access it like `this.$page.props.trans` as a computed method like

```js
computed: {
    lang() {
        return this.$page.props.trans
    }
},
```

## Plugins

we build a plugins system to make the framework scalabel so you can build any new plugin with very easy way by using [Laravel Modules](https://nwidart.com/laravel-modules/v6/introduction)

## Tasks

- JetSteam Auth ✅
- Admin Panel Design ✅
- Generator ✅
- Menu ✅
- Releationship ✅
- Select Field ✅
- spatie/laravel-medialibrary Integration ✅
- spatie/laravel-permission Integration ✅
- spatie/laravel-translatable Integration ✅
- spatie/laravel-translation-loader Integration ✅
- spatie/laravel-settings Integration ✅
- spatie/laravel-sitemap Integration ✅
- SpartnerNL/Laravel-Excel for auto export and import generator Integration ✅
- Use First String as a main search key ✅
- Vaildation By Generator Full Version ✅
- Colorpicker Field ✅
- Datepicker Field ✅
- Hide/Show Cols Form Table Dynamic form UI
- spatie/laravel-backup Integration
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
