- [Translations Plugin](#translations-plugin)
  - [Add Translation Key](#add-translation-key)
  - [Use Translation Key On JS](#use-translation-key-on-js)

# Translations Plugin
we build a translations loader that loads translations from the database and you can scan current translations and export them to an excel sheet and import it again to the system.

<hr>
<a name="add-translation-key"></a>
## [Add Translation Key](#add-translation-key)

you can pass the translations as a global by adding this line to the file  `Modules\Base\Helpers\Menu\List.php` or on Any service Provider

```php
Core::registerGlobalTranslation(Trans::make('roles.sidebar')->value(__('roles.sidebar')));
```
<hr>
<a name="use-translation-key-on-js"></a>
## [Use Translation Key On JS](#use-translation-key-on-js)

you can now access this translations by key from `trans` prop and you can access it like `this.$page.props.trans` as a computed method like

```js
computed: {
    lang() {
        return this.$page.props.trans
    }
},
```

and you can build an easy to use method for get translation by key like

```js
methods: {
    trans(key){
        return this.lang[key] ? this.lang[key] : key;
    }
}
```
