- [Roles Plugin](#roles-plugin)
  - [Roles Methods](#roles-methods)
  - [Generate Permission](#generate-permission)

# Roles Plugin

we build a plugin for user ACL build in [spatie/laravel-permission](https://spatie.be/docs/laravel-permission) so you can use the full package feature

<hr>
<a name="roles-methods"></a>
## [Roles Methods](#roles-methods)

we build some methods to help you, on every `List.vue` you will get a 6 var

```js
canView //= view_TABLE on permission table
canViewAny //= view_any_TABLE on permission table
canCreate //= create_TABLE on permission table
canEdit //= update_TABLE on permission table
canDelete //= delete_TABLE on permission table
canDeleteAny //= delete_any_TABLE on permission table
```

so you can use it to handle what the end-user sees when he has selected permission.

and for menus you can handle permission using `->can()` with the permission name init

<hr>
<a name="generate-permission"></a>
## [Generate Permission](#generate-permission)

you can generate permission for a selected table if not exists and append it to the main admin role using this command

```bash
php artisan vilt-roles:generate table
```

where `table` is the name of the table you when to use it
