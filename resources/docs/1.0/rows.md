- [Rows](#rows)
  - [Rows Methods](#rows-methods)
  - [Main Types](#main-types)
  - [Select Row](#select-row)
  - [Date Row](#date-row)
  - [Switch Row](#switch-row)
  - [Repeater Row](#repeater-row)
  - [Schema Row](#schema-row)
  - [Media Row](#media-row)
  - [Trans Row](#trans-row)

# Rows

we are using Rows and Schema on every controller we build to manage the form builder and we have a lot of methods and types for these rows

<hr>
<a name="rows-methods"></a>

## [Rows Methods](#rows-methods)


let's know more about methods first

1. `label(string)` is the label of the row on the view you can use `__('string')` as a label for translations
2. `placeholder(string)` is the label for the placeholder of input
3. `sorting(bool)` the set if the row is sorting or not
4. `list(bool)` active the row on the table
5. `view(bool)` active the row on the view modal
6. `create(bool)` active the row on the create form
7. `edit(bool)` active the row on the edit form
8. `disabled(string)` make the filed not editable taks `create`, `edit`
9. `placeholder(string)` to add a placeholder to supported inputs
10. `default(static)` to set default data for any row
11. `over(bool)` use to inject a row into schema without save it direct to database
12. `validation(string)` use to add laravel validation to the row
13. `search(bool)` use to set the row as a searchable row
14. `unique(bool)` use to set unique validation to the create and edit with auto skip
15. `url(bool)` use to convert the the view and table row to be clickable url

that's the main method but we have some custom methods with a selected type of the row so let's speak about types
<hr>

<a name="main-types"></a>
## [Main Types](#main-types)

`text`, `number`, `password`, `color`, `money`

<hr>
<a name="select-row"></a>
## [Select Row](#select-row)

there is 5 types of select `select-value`, `select`, `hasOne`, `relation`

we use [multiselect vue3](https://github.com/SuadeLabs/vue3-multiselect) component for this it's returns an object for selected value and we use 4 methods for its `options(array)` it takes array of vars like `["first", "last"]` or

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

In this case you must use 2 methods other `track_by_name(string)` and `track_by_id(string)` takes the name of the name prop and the id prop

and the last for this type you can use method `multi(bool)` to select if it's multi-select or not

we are using this type as 2 more types `relation` & `hasOne` to build relations on the database

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

<hr>

<a name="date-row"></a>
## [Date Row](#date-row)

we are using [flatpacker](https://github.com/ankurk91/vue-flatpickr-component) as a date picker

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

<hr>
<a name="switch-row"></a>
## [Switch Row](#switch-row)

we use [toggle](https://github.com/vueform/toggle) as a switch and bool and we add a `reactive(bool)` method to make the fields hide and show when the switch value change and you select the field reactive with by method `row(string)`

EX:

```php
Row::make('activated')->type('switch')
```

```php
Row::make('password')->type('password')->reactive(true)->row('activated')
```

<hr>
<a name="repeater-row"></a>
## [Repeater Row](#repeater-row)

now you can create a repeater with a very easy way just use the type of `repeater` like this

```php
Row::make('repeater')->type('repeater')->label('Repeater')->options([
    Row::make('title')->type('text')->get()
    Row::make('activated')->type('switch')->get()
])->get()
```

and you will get a read add and remove repeater

<hr>
<a name="schema-row"></a>
## [Schema Row](#schema-row)

if you have a schema of inputs and you went to returns it as a json you can use `schema` type like this

```php
Row::make('schema')->type('schema')->label('Schema')->options([
    Row::make('title')->type('text')->get()
    Row::make('activated')->type('switch')->get()
])->get()
```

i will build a schema of inputs for you

<hr>
<a name="media-row"></a>
## [Media Row](#media-row)

thanks for [Laravel-medialibrary](https://spatie.be/docs/laravel-medialibrary/v10/introduction) because we use it to handle media upload and multi upload you can easy use type `image` to select and preview and upload image or multi image with auto process and add the row and let the lib do everything for you, you can use it like

```php
Row::make('avatar')->label('Avatar')->type('image')->preview(true)->multi(true)->list(false)->get(),
```

you can add multi media to the same input and we will handel it auto by medialibrary you need to just add new method for row `->multi(true)`

and to preview images when you upload it it's very easy just use `->preview(true)` and it will handel the action auto

<hr>
<a name="trans-row"></a>
## [Trans Row](#trans-row)

thanks for [Laravel-translatable](https://github.com/spatie/laravel-translatable) because we use it to handle the row base translations so you can easy use multi language save to database as a json object be just using `trans` type i will gave you an input with the current lanuage on every record like

```php
Row::make('title')->label('Title')->type('trans')->get(),
```
