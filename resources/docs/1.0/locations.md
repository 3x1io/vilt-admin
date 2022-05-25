- [Location Settings](#settings)
- [Translation](#translation)

# Locations
by locations feature you can get tones of database set of `countries`, `cities`, `areas`, `languages`, `currency`. and your can set some settings of locations like **Google Map Key** and **lang & lat** to use it in the google map.

<hr>

<a name="settings">
## Location Settings
</a>
we are generate for you a full ui to change and setup the locations value and you can use it by easy way by using `setting()` function
1. Current Country `setting('local.country')`
2. Country Phone Code `setting('local.phone')`
3. System Language `setting('local.lang')`
4. System Currency `setting('$')`
5. Latitude `setting('local.lat')`
6. Longitude `setting('local.lng')`
7. Google Map Key `setting('geo.key')`

> {info} every city has an field named `price` you can use this filed to set shipping fee to this country from your current location.

<hr>

<a name="translation">
## Translation
</a>

Our location features support database translations so you can change any string in the system by using **Translation** function by adding any string in to this function

```php
trans('your sting')
```
Or

```php
__('your sting')
```

and go to route `admin/translations` and make rescan and you will get the string you add on the table and you can set it to any thing you went and you can import and export translation as excel sheet and add a new languages by change the config in `config/translatable` and add a new language sample to the array of languages
