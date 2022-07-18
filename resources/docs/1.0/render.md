# Render Views

you can set a custom view on selected controller by using `Render::class` on the selected method that will return the class

<hr>

<a name="using"></a>
## [Using](#using)

to return an inertiajs view, please put the vue files inside path `Modules/Your_Module/Resources/views` and after that use the file name like `Index` on the `Render::class` to return the view with selected data on the `->data()` method like

```php 
public function index()
{
    return Render::make('Index')->module('Roles')->data([])->render();
}
```

the custom view can be extend the `resources/js/Pages/Resource.vue`
