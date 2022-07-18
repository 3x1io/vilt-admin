# Create Translations

you can add more translations to your app by using `langs(){}` method on the `Resource` class

```php
public function langs(){
    return [
        Lang::make('users.sidebar')->value(__('User'))
    ];
}
```

it will pass the `users.sidebar` to the vuejs inside `this.$attrs.data.trans` array

<hr>

<a name="user-in-provider"></a>
## [Use in provider](#user-in-provider)

you can use the `Lang::class` direct on the provider by usering `Core::class` like

```php
Core::registerGlobalTranslation(Lang::make('users.sidebar')->value(__('User')));
```

- [Add Translations](#add-translations)
    - [Use in provider](#user-in-provider)
