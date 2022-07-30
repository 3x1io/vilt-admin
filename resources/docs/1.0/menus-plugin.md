- [Menus Plugin](#menus-plugin)
    - [Install Menus Plugin](#install-menus-plugin)
    - [Use Database Base Menu](#use-database-base-menu)

# Menus Plugin

we are building a plugin to manage menus with database, like sorting rename and delete menus.

<hr>
<a name="install-menus-plugin" />
## [Install Menus Plugin](#install-menus-plugin)

to install menus plugin by run this command

```bash
php artisan menu:install
```

it will generate roles and permissions for menus


<hr>
<a name="use-database-base-menu" />
## [Use Database Base Menu](#use-database-base-menu)

to switch between database base menu and file base menu 

first go to `admin/menus` route and click on `Generate` action to generate the current menus with groups to database and after that

you can set `MENU_DATABASE` to `true` on `.env` file
