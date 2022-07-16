# CRUD Hooks

we have an auto process CRUD operation on our framework so to add or change or update some part of code you need to use our hooks and we add a hooks for every thing


<hr>

<a name="hooks"></a>

## [Hooks](#hooks)

every method have a 2 hooks `before` | `after` so we have

```php
public function customQuery($q, $request, $rows){}
public function afterLoad($data){}
public function validStore(Request $request){}
public function beforeStore(Request $request){}
public function afterStore(Request $request, $record){}
public function validUpdate(Request $request){}
public function beforeUpdate(Request $request, $record){}
public function afterUpdate(Request $request, $record){}
public function beforeDestory(Request $request, $record){}
public function afterDestory(Request $request, $record){}
public function beforeBulk(Request $request, $record){}
public function afterBulk(Request $request, $record){}
```

this hooks manage every action on the resource so you can custom it easy be use it on your resource


- [CRUD Hooks](#crud-hooks)
  - [Hooks](#hooks)
