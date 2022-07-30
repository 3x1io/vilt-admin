- [Translations Plugin](#translations-plugin)
  - [Add Translation Key](#add-translation-key)
  - [Use Translation Key On JS](#use-translation-key-on-js)

# Translations Plugin
we build a translations loader that loads translations from the database and you can scan current translations and export them to an excel sheet and import it again to the system.


<hr>
<a name="install-translations-plugin"></a>
## [Install Translations Plugin](#install-translations-plugin)

to install translations plugin you must run this command

```bash
php artisan translations:install
```

it will generate a permission for the translations table and append it to the main admin role.

<hr>
<a name="active-auto-translation"></a>
## [Active Auto Translation](#active-auto-translation)

to active auto translation feature you must go to google cloud and get an api key after allow google translation api and on the .env file 

```dotenv
GOOGLE_API=
```

set this key to your API key, or you can set it on the Google Settings


<hr>
<a name="use-translation-key-on-js"></a>
## [Use Translation Key On JS](#use-translation-key-on-js)

you can now access this translations by key from `trans` prop and you can access it like `this.$page.props.trans` as a computed method like

```js
computed: {
    lang() {
        return this.$page.props.data.trans
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
