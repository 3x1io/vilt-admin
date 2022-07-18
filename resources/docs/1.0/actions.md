# Create Actions

every resource has a lot of actions, this action can be `url` or `route` or `modal` that's mean you can send a direct request by just click an action button or open a modal to send data to backend on selected route.
<hr>

<a name="using"></a>
## [Using](#using)

to create a new action you can use `Action::class` to create a new action on the selected resource and pass this action class to resource method `actions()` like

```php 
public function actions(){
    return [
        Action::make('generate')->label(__('Generate Permissions'))->type('success')->modal('generate')->render(),
    ];
}
```

this modal can take 3 methods `->modal(string)` to open a modal by name, `->url(string)` to open direct url on a new tab, or `action(route_name)` to make a direct ajax request to selected action
