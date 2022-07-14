- [List to Blocks](#list)
- [Use a Block](#use)
- [Create New Block](#create)

# Blocks 

the blocks it a new way to generate a UI & component by using database and blade Power 

<hr>

<a name="list">
## List of Blocks
</a>

our framework has a tones of blocks and you can check it's code and edit it very easy by access route `/admin/blocks` you can search and filter and edit any block you need.
and here is the list of available blocks:

for form blocks

1. form.checkbox `Bootstrap Checkbox`
2. form.text `Bootstrap Text`
3. form.phone `Bootstrap Phone Input With Vue-Mask`
4. form.qnt	`Bootstrap QNT input with 2 buttons + and -`
5. form.submit	`Bootstrap submit button`
6. form.hidden	`Hidden Input`
7. form.m-select `Vue-Multiselect Component Input`
8. form.date	`Vue-Flatpacker Date Input`
9. form.editor	`Content Editor`
10. form.radio	`Radio Button Input`
11. form.switch	`Vue-Switch Input`
12. form.color	`Vue-Color-Switch Input`
13. form.rate	`Starts Rate Vue Input`
14. form.image	`DropZone Vue Input`
15. form.password `Bootstrap Password Input`
16. form.range	`Bootstrap Rang Input`
17. form.items	`Multi Fields Json Input`
18. form.textarea `Bootstrap TextArea`
19. form.email	`Bootstrap Email Input`
20. form.number	`Bootstrap Number Input`

for listing blocks

1. list.action `Axios Boolean Changer Switch`
2. list.email	`Email Link with bootstrap Badge Class and FontAwesome envelope`
3. list.phone	`Phone Link with bootstrap Badge Class and FontAwesome phone`
4. list.link	`Bootstrap Link with FontAwesome link`
5. list.date	`Vue Date Filter`
6. list.money	`Vue Money converter with background and currency sample`


<hr>


<a name="use">
## Use a Block
</a>

to use this feature you need a add script of `mix('js/admin.js')` at the end of `</body>` and add this helper

```php
vue_form($action,$redirectAfterSuccess,$formFields, $methodType, $vueDataObjectToSetDataToForm, $itemsSchemaWhenUseItemsInput)
```
this function create a head of vuejs form with all supported methods and component it's support validation

```php
end_vue_form()
```
this function will close the end of form

between start helper and end helper you can use block input helper of form like this 
```php
{!! input($inputType, $inputNameAtr,$inputLabel, $inputValidation, $inputOptions) !!}
```

you can set the input type form types like `form.text` but without form. just use `text` as a type 

other way to use block on list by using this function inside `<listing>` of generated index.blade.php file of the framework and on the body of the table you can use this function

```php
list_fn($fnType, $filedName, $options)
```
the fnType will be the key of list blocks without list.

<hr>


<a name="create">
## Create New Block
</a>

you can create your custom block by go to the route `admin/blocks` and create a new block with a key start with `form.` to inputs and `list.` for the listing

<hr>
