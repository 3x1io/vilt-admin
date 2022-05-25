
- [Install Vilt Admin](#install-vilt-admin)
  - [Create a Folder](#create-a-folder)
  - [Install](#install)
  - [Link With Valet +](#link-with-valet-)
  - [Update .env](#update-env)
  - [Clear Cache](#clear-cache)
  - [Run migration](#run-migration)
  - [Install Roles](#install-roles)
  - [Clear View](#clear-view)
  - [Run Yarn](#run-yarn)

# Install Vilt Admin

we now have a good env to start building our app, so let's start by setup Laravel v9 on our PC

<hr>

<a name="create-a-folder"></a>

## [Create a Folder](#create-a-folder)

```bash
cd Sites
```

let's now go and create a new project inside the Sites directory

<hr>

<a name="install"></a>

## [Install](#install)

```bash
composer create-project 3x1io/vilt-admin
```

<hr>

<a name="link-with-valet"></a>

## [Link With Valet +](#link-with-valet)

it's working now we have a new database you can check it in your phpmyadmin, now let's link and secure the app

```bash
valet link
valet secure
```

<hr>

<a name="update-env"></a>

## [Update .env](#update-env)

the last step to run the project is to edit your .env file with the database info and APP_URL.

```dotenv
APP_NAME=3x1
APP_URL=https://3x1.test
APP_DOMAIN=3x1.test
DB_DATABASE=3x1
DB_USERNAME=root
DB_PASSWORD=3x1
```

<hr>

<a name="clear-cache"></a>

## [Clear Cache](#clear-cache)

Clear cache to reset .env vars

```bash
php artisan config:cache
```

<hr>

<a name="run-migration"></a>

## [Run migration](#run-migration)

```bash
php artisan migrate
```

<hr>

<a name="install-roles"></a>

## [Install Roles](#install-roles)

Go to route `/register` and create a new account

new run this command to generate the main role

```bash
php artisan vilt-roles:install
```

<hr>

<a name="clear-view"></a>

## [Clear View](#clear-view)

```bash
php artisan optimize
```

<hr>

<a name="run-yarn"></a>
## [Run Yarn](#run-yarn)

Run Yarn to the development frontend and compile the assets

```bash
yarn
```

```bash
yarn run watch
```

you can now login to the admin from `/login`
