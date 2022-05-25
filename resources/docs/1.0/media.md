- [Media](#media)
  - [Add Media](#add-media)
  - [Add Multi Media](#add-multi-media)
  - [Preview Images](#preview-images)

# Media

to add a media we are using [spatie/laravel-medialibrary](https://spatie.be/docs/laravel-medialibrary/v10/introduction) and every model on the generator is ready to use with media

<hr>
<a name="add-media"></a>
## [Add Media](#add-media)

to add a media to your schema on your controller you will get a method `schema` on this method add a new row like this

```php
Row::make('avatar')->label('Avatar')->type('image')->list(false)->get(),
```

it will add to you a file input and Handel upload of the file auto

after that go to file `resources/js/Pages/{YourModelName}/List.vue` and add the field to the 2 `form` methods like this

```js
    this.form = this.$inertia.form({
        name: "",
        phone: "",
        email: "",
        address: "",
        title: "",
        avatar: null,
    });
```

<hr>
<a name="add-multi-media"></a>
## [Add Multi Media](#add-multi-media)

you can add multi media to the same input and we will handel it auto by medialibrary you need to just add new method for row `->multi(true)`


<hr>
<a name="preview-images"></a>
## [Preview Images](#preview-images)

to preview images when you upload it it's very easy just use `->preview(true)` and it will handel the action auto
