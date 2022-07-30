<?php

namespace Modules\Base\Helpers\Resources;


use Closure;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Resources\Controller;

class Resource
{
    use Controller;

    public function __construct()
    {
        $this->table = app($this->model)->getTable();
        if (empty($this->view)) {
            $this->view = "Resource";
        }
    }

    public function rows()
    {
        return [];
    }

    public function langs()
    {
        if (!empty($this->resourceTitle)) {
            $title = $this->resourceTitle;
        } else {
            $title = $this->generateName();
        }

        $langs = [
            Lang::make($this->table . '.sidebar')->value(__($title))
        ];

        return $langs;
    }

    public function lang()
    {
        return [];
    }

    public function table()
    {
        return Table::make('table')->render();
    }

    public function form()
    {
        return Form::make('modal')->get();
    }

    public function relations()
    {
        return [];
    }

    public function actions()
    {
        return [];
    }

    public function modals()
    {
        return [];
    }

    public function menu()
    {
        return [];
    }

    public function route()
    {
        return [];
    }

    public function customQuery($q, $request, $rows)
    {
    }

    public function afterLoad($data)
    {
        return $data;
    }

    public  function loadAPIData($data, $request){
        return $data;
    }

    public  function setFilters($query, $request){}

    public function index(Request $request)
    {
        $isAPI = str_contains($request->route()->getPrefix(), 'api');
        if (!$isAPI) {
            $this->roles($this->url);
            if (!$this->canView) {
                return inertia('403');
            }
        }

        $rows = $this->schema();
        $data = Query::create(app($this->model))
            ->modifyQuery(function ($q) use ($request, $rows, $isAPI) {
                foreach ($rows as $row) {
                    if (($row['type'] === 'relation') && ($row['list'] === true)) {
                        $q->with($row['field']);
                    }
                    if (($row['type'] === 'hasOne') && ($row['list'] === true)) {
                        $q->with($row['relation']);
                    }
                    if ($isAPI && $this->api) {
                        if (($row['type'] === 'relation') ) {
                            $q->with($row['field']);
                        }
                        if (($row['type'] === 'hasOne')) {
                            $q->with($row['relation']);
                        }
                    }
                }
                $this->customQuery($q, $request, $rows);
            })
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                $this->searchFileds(),

                function ($query) use ($request) {
                    $this->setFilters($query, $request);
                }
            );

        foreach ($rows as $row) {
            if (($row['type'] === 'hasOne') && ($row['list'] === true) && $row['relation']) {
                foreach($data as $i=>$item){
                    $item->{$row['field']} = $item->{$row['relation']};
                    unset($item->{$row['relation']});
                }
            }
            else {
                if ($isAPI && $this->api) {
                    if (($row['type'] === 'hasOne') && $row['relation']) {
                        foreach($data as $i=>$item){
                            unset($item->{$row['field']});
                        }
                    }
                }
            }
        }

        $this->loadMedia($data);
        $this->loadSelect($data);
        $this->loadFilters($request);
        $data = $this->loadTranslations($data);
        $data = $this->afterLoad($data);

        if ($isAPI && $this->api) {
            $data = $this->loadAPIData($data, $request);
            if(is_array($data) && count($data)){
                return response()->json([
                    "success" => true,
                    "message" => __($this->generateName(true, true) . ' Loaded Success'),
                    "data" => $data
                ]);
            }
            else {
                return response()->json([
                    "success" => false,
                    "message" => __('Sorry Record Not Found!'),
                    "data" => []
                ], 404);
            }

        } else {
            return inertia($this->view, $this->response($data, app($this->model)->getTable()));
        }
    }

    public function beforeStore(Request $request)
    {
        return $request->all();
    }

    public function validStore(Request $request)
    {

        $rules = $this->getVaild($request);
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        return $validator;
    }

    public function store(Request $request)
    {

        $isAPI = str_contains($request->route()->getPrefix(), 'api');

        if (!$isAPI) {
            $this->roles($this->url);
            if (!$this->canCreate) {
                return inertia('403');
            }
        }


        $validator = $this->validStore($request);

        if (!$validator->fails()) {
            $request = $this->proccessSelect($request);
            $getData = $this->beforeStore($request);
            $data = $this->processTranslations($getData);
            $record = $this->model::create($data);


            $this->processCreateMedia($request, $record);
            $this->afterStore($request, $record);

            if ($isAPI && $this->api) {
                return response()->json([
                    "success" => true,
                    "message" => __($this->generateName(true, true) . " Created Success"),
                    "data" => $record
                ]);
            } else {
                return Alert::make(__($this->generateName(true, true) . " Created Success"))->fire();
            }
        }
    }

    public function afterStore(Request $request, $record)
    {
    }

    public  function loadAPIShow($record){
        return $record;
    }

    public  function loadShowQuery($query){
        return $query->first();
    }

    public  function loadAPIShowRecord($record){
        unset($record->media);
        return $record;
    }

    public  function show(Request $request, $id){
        $isAPI = str_contains($request->route()->getPrefix(), 'api');
        if (!$isAPI) {
            $this->roles($this->url);
            if (!$this->canEdit) {
                return inertia('403');
            }
        }

        $query = $this->model::query();
        $query->find($id);
        foreach($this->rows() as $row){
            if($row['type'] === 'relation' || $row['type'] === 'hasOne'){
                if(!empty($row['relation'])){
                    $query->with($row['relation']);
                }
                else {
                    $query->with($row['field']);
                }
            }
        }

        $record = $this->loadShowQuery($query);
        $record = $this->loadAPIShow($record);

        $this->loadMedia([$record]);
        $this->loadSelect([$record]);
        $this->loadTranslations([$record]);

        foreach($this->rows() as $row) {
            if ($row['type'] === 'hasOne' && !empty($row['relation'])) {
                $record->{$row['field']} = $record->{$row['relation']};
                unset($record->{$row['relation']});
            }
        }

        return response()->json([
            "success" => true,
            "message" => __($this->generateName(true, true) . " Loaded Success"),
            "data" => $this->loadAPIShowRecord($record)
        ]);

    }

    public function beforeUpdate(Request $request, $record)
    {
        return $request->all();
    }

    public function validUpdate(Request $request, $id)
    {

        $rules = $this->getVaild($request, $id);

        $validator = Validator::make($request->all(), $rules)->after(function ($validator) use ($request) {
            //$validator->errors()->add('current_password', __('The provided password does not match your current password.'));
        });

        $validator->validate();

        return $validator;
    }

    public function update(Request $request, $id)
    {

        $isAPI = str_contains($request->route()->getPrefix(), 'api');
        if (!$isAPI) {
            $this->roles($this->url);
            if (!$this->canEdit) {
                return inertia('403');
            }
        }

        $validator = $this->validUpdate($request, $id);

        if (!$validator->fails()) {
            $record = $this->model::find($id);
            $request = $this->proccessSelect($request);
            $getData = $this->beforeStore($request);
            $data = $this->processTranslations($getData, $record);
            $record->update($data);
            $this->processUpdateMedia($request, $record);
            $this->afterUpdate($request, $record);

            if ($isAPI && $this->api) {
                return response()->json([
                    "success" => true,
                    "message" => __($this->generateName(true, true) . " Updated Success"),
                    "data" => $record
                ]);
            } else {
                return Alert::make(__($this->generateName(true, true) . " Updated Success"))->fire();
            }
        }
    }

    public function afterUpdate(Request $request, $record)
    {
    }

    public function beforeDestory($record)
    {
        return $record;
    }

    public function destory(Request $request, $id)
    {
        $isAPI = str_contains($request->route()->getPrefix(), 'api');
        if (!$isAPI) {
            $this->roles($this->url);
            if (!$this->canDelete) {
                return inertia('403');
            }
        }

        $record = $this->model::find($id);
        if ($record) {
            $record = $this->beforeDestory($record);
            foreach($this->rows() as $row){
                if($row['type'] === 'relation'){
                    $record->{$row['field']}()->sync([]);
                }
            }
            $record->delete();
            $this->afterDestory($record);

            $message = __(Str::ucfirst(Str::singular($this->table)) . " Deleted Success");
            if ($isAPI && $this->api) {
                return response()->json([
                    "success" => true,
                    "message" => $message,
                    "data" => []
                ]);
            } else {
                return Alert::make($message)->fire();
            }
        } else {
            $message = __("Sorry Record Not Found");
            if ($isAPI && $this->api) {
                return response()->json([
                    "success" => false,
                    "message" => $message,
                    "data" => []
                ], 404);
            } else {
                return Alert::make($message)->type("error")->fire();
            }
        }
    }

    public function afterDestory($record)
    {
    }

    public function beforeBulk(Request $request)
    {
        return $request->all();
    }

    public function bulk(Request $request)
    {
        $isAPI = str_contains($request->route()->getPrefix(), 'api');

        $rules = [
            "action" => "required",
            "ids" => "required|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $data = $this->beforeBulk($request);
            foreach ($data['ids'] as $key => $value) {
                $record = $this->model::find($key);
                if ($record) {
                    if ($data['action'] === 'delete') {
                        if (!$isAPI) {
                            $this->roles($this->url);
                            if (!$this->canDeleteAny) {
                                return inertia('403');
                            }
                        }
                        foreach($this->rows() as $row){
                            if($row['type'] === 'relation'){
                                $record->{$row['field']}()->sync([]);
                            }
                        }
                        $record->delete();
                        $this->afterBulk($request, $record);
                    }
                }
            }

            $message = __(Str::ucfirst(Str::singular($this->table)) . " Bulk Action Success");
            if ($isAPI && $this->api) {
                return response()->json([
                    "success" => true,
                    "message" => $message,
                    "data" => []
                ]);
            } else {
                return Alert::make($message)->fire();
            }
        }
    }

    public function afterBulk(Request $request, $record)
    {
    }

    public function export()
    {
    }

    public function import(Request $request)
    {
    }

    public function routes()
    {
        return Router::make($this->table)->controller(static::class)->custom($this->route())->api($this->api)->get();
    }

    public function menus()
    {
        $menus = [
            $this->group => Menu::make(Str::ucfirst($this->table))->lang($this->table . '.sidebar')->icon($this->icon)->route($this->table . '.index')->can('view_any_' . $this->table)
        ];
        return array_merge($menus, $this->menu());
    }
}
