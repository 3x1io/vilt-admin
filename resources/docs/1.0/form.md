<a name="form"></a>
# Form

our framework has a form class that can use to set the form type between `modal` or `tabs` so you can convert a form to multi steps with just backend method

<hr>
<a name="tabs"></a>
## [Tabs](#tabs)

to build a tabs form you need to use the `Tabs` class with `Form` class on the resource like

```php
public  function form()
{
    return Form::make('tabs')->tabs([
        Tab::make('basic')->label(__('Basic'))->get(),
        Tab::make('media')->label(__('Media'))->get(),
        Tab::make('amenities')->label(__('Amenities'))->get(),
        Tab::make('units')->edit(false)->label(__('Units'))->get(),
    ])->title(__('Create Property'))->get();
}
```

and to add the row on the selected tab it's easy to set `->tab()` to the name of the tab

- [Form](#form)
    - [Tabs](#tabs)
