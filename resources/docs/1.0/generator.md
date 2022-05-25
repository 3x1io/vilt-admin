# CRUD Generator

Our Admin panel has a generator to generate full resource by very easy command you just build your schema and the command will create a full CRUD operation and APIs for you.

thanks for [Infyom API Generator](https://infyom.com/open-source/laravelgenerator/docs/introduction)

<a name="create-migration"></a>
## [Create Migration](#create-migration)


first, make a migration like

```bash
php artisan make:migration create_customer_table
```

after you fill migration with your schema run migration

```bash
php artisan migrate
```
<hr>

<a name="start-generate"></a>
## [Start Generate](#start-generate)

now it's time for building the resource just run this command with the table name

```bash
php artisan make:vilt-resource customers
```
<hr>
<a name="generate-without-apis"></a>
## [Generate Without APIs](#generate-without-apis)

if you don't need to generate APIs you can use flag `-A`, but use must build your relations inside the model

```bash
php artisan make:vilt-resource customers -A
```
<hr>
<a name="api-generator"></a>
## [API Generator](#api-generator)

we are using Laravel Sanctum to handle API Tokens so you can review the packages before starting using this section.

you can now generate your API by just using this command

```bash
php artisan infyom:api Customer
```

when the customer is a Model name



- [CRUD Generator](#crud-generator)
  - [Create Migration](#create-migration)
  - [Start Generate](#start-generate)
  - [Generate Without APIs](#generate-without-apis)
  - [API Generator](#api-generator)

