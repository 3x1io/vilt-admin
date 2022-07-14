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
php artisan vilt:resource customers Customer
```

this command will generate a model form the table and generate a resource for you

<hr>
<a name="files"></a>
## [Files](#files)

the generator will generate 2 files for you

1- Model File it will be generated inside your module folder `Entities`

2- Resource File it will be generated inside your `Resources` Folder



- [CRUD Generator](#crud-generator)
  - [Create Migration](#create-migration)
  - [Start Generate](#start-generate)
  - [Files](#files)

