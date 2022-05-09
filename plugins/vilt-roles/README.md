# Vilt Roles

Full User ALC Plugin For Vilt Admin

## Installation

You can install the package via composer:

```bash
composer require 3x1io/vilt-roles
```

Publish Translation and config

```bash
php artisan vendor:publish --tag="vilt-roles-views"
php artisan vendor:publish --tag="vilt-roles-config"
php artisan vendor:publish --tag="vilt-roles-translations"
```

and now clear cache

```bash
php artisan optimize:clear
```


## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [3x1](https://github.com/3x1io)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
