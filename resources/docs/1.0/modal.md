# Create Modal

it's easy to create a new custom modal on the resource and fire it using `Action::class` by set it `->modal(modal_name)` so on the action click it will open the modal
<hr>

<a name="using"></a>
## [Using](#using)

to create a new modal on the resource you can use `Modal::class` to create a new modal on the selected resource and pass this modal class to resource method `modals()` like

```php
public function modals()
{
    return [
        Modal::make('generate')->title(__('Generate Permissions'))->type('success')
            ->rows([
                Row::make('guard_name')->label(__('Guard Name'))->get(),
            ])
            ->buttons([
                Action::make('generate')->label(__('Generate'))->action('roles.generate')->type('success')->render(),
            ])
            ->render(),
    ];
}
```

on the `->rows()` method to set the schema of the form show on modal and on `->buttons()` method to set the actions on modal like `save` , `update` ..etc
