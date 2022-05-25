- [Create Setting](#create)
- [Show Setting](#show)
- [Update Setting](#update)
- [Use Setting](#use)

# Settings
Our framework have a very perfect and easy to use `setting()` helper this helper have an easy idea, it's take a key and get the value of this key from the database

<hr>

<a name="create">
## Create New Setting
</a>

our framework support a GUI to create a new setting and you can access it from the route `/admin/settings/dev` and add your setting by GUI, to do that just add 
- group `the group of setting`
- key `the key you will use to get setting value`
- value `the value you went`

the value can be a json value but you must encode it to be string and stored in longText datatype 
<hr>

<a name="show">
## Show Setting
</a>

to show the setting input you can use our helper, you can create a new blade file for your setting and inside it use a form with post method and inside this form use this helpers 

```php 
{!! setting_show($key, $label, $type, $option=[], $id="") !!}
```
it's take some params 
1. $key `Key Of Setting`
2. $label `Description Of this setting`
3. $type `Type Of Input [text, textarea, select, checkbox, email, password, rang]`
4. $option `If Type is select you can send options as array like sening User::all()`
5. $id `it's use for 2 way one way for every inputs to add a custome id and for select to select what field you went to show in value`

this helper use inside blade file and it will convert to the input you can access every setting like `site.name` on the controller like `site_name`

<hr>

<a name="update">
## Update Setting
</a>

after to show the input you can create a controller with the route of the post action to fetch data and you can use an easy way to update the setting by use this helper

```php
setting_update($key, $value);
```
it's take some params 
- $key `Key Of Setting`
- $value `The Value You Get In the request to update it`

this function take a key and value and go to the Setting Model and update the value
<hr>

<a name="use">
## Use Setting
</a>

you can access the saved setting by very easy way and you can use it on the controller or model or blade with this helper 
```php 
setting($key);
```
this helper take a `key` of the setting and get it's value form the database.
