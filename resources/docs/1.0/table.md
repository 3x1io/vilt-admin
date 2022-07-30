<a name="table"></a>
# Table

our framework has a class for table use to set a filters for the table and add a row base actions

<hr>
<a name="filters"></a>
## [Filters](#filters)

to add a new filter to the table you need to use some methods on the `table()` method add

```php
public function table(){
    return Table::make('table')->filters([
        Filter::make('customer_group_id')->rows([
            Row::make('customer_group_id')->relation('customersGroup')->validation("required|array")->label(__('Customer Group'))->type('hasOne')->list(false)->model(\Modules\Customers\Entities\CustomersGroup::class)->get(),
        ])->render()
    ])->render();
}
```

and to active this action on the backend you need to use `setFilters()` like

```php 
public function setFilters($query, $request)
{
    if($request->has('customer_group_id')){
        $query->where('customer_group_id', $request->customer_group_id);
    }
}
```

<hr>
<a name="actions"></a>
## [Actions](#actions)

to add a new action on the row you need to use `->actions()` method on the `Table::class` method like

```php 
public function table(){
    return Table::make('table')->actions([
        Action::make('password')->type('main')->label(__('Password'))->icon('bx bx-lock')->modal('password')->render(),
    ])->render();
}
```

- [Table](#table)
    - [Filters](#filters)
    - [Actions](#actions)
