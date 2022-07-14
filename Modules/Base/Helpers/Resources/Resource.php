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
        return [];
    }

    public function form()
    {
        return [];
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

    public function index(Request $request)
    {
        $this->roles($this->url);
        if (!$this->canView) {
            return inertia('403');
        }

        $rows = $this->schema();
        $data = Query::create(app($this->model))
            ->modifyQuery(function ($q) use ($request, $rows) {
                foreach ($rows as $row) {
                    if ($row['type'] === 'relation') {
                        $q->with($row['field']);
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
                $this->searchFileds()
            );

        $this->loadMedia($data);
        $this->loadSelect($data);
        $this->loadFilters($request);
        $data = $this->loadTranslations($data);
        $data = $this->afterLoad($data);


        return inertia($this->view, $this->response($data, app($this->model)->getTable()));
    }

    public function beforeStore(Request $request)
    {
        return $request->all();
    }

    public function store(Request $request)
    {
        $this->roles($this->url);
        if (!$this->canCreate) {
            return inertia('403');
        }

        $rules = $this->getVaild();

        $validator = Validator::make($request->all(), $rules)->after(function ($validator) use ($request) {
            //$validator->errors()->add('current_password', __('The provided password does not match your current password.'));
        });

        $validator->validate();

        if (!$validator->fails()) {
            $request = $this->proccessSelect($request);
            $getData = $this->beforeStore($request);
            $data = $this->processTranslations($getData);

            $record = $this->model::create($data);

            $this->processCreateMedia($request, $record);
            $this->afterStore($request, $record);

            return Alert::make(__($this->generateName(true, true) . " Created Success"))->fire();
        }
    }

    public function afterStore(Request $request, $record)
    {
    }

    public function beforeUpdate(Request $request, $record)
    {
        return $request->all();
    }

    public function update(Request $request, $id)
    {
        $this->roles($this->url);
        if (!$this->canEdit) {
            return inertia('403');
        }

        $rules = $this->getVaild(false);

        $validator = Validator::make($request->all(), $rules)->after(function ($validator) use ($request) {
            //$validator->errors()->add('current_password', __('The provided password does not match your current password.'));
        });

        $validator->validate();

        if (!$validator->fails()) {
            $record = $this->model::find($id);
            $request = $this->proccessSelect($request);
            $getData = $this->beforeStore($request);
            $data = $this->processTranslations($getData);
            $record->update($data);
            $this->processUpdateMedia($request, $record);
            $this->afterUpdate($request, $record);

            return Alert::make(__($this->generateName(true, true) . " Updated Success"))->fire();
        }
    }

    public function afterUpdate(Request $request, $record)
    {
    }


    public function beforeDestory($record)
    {
        return $record;
    }

    public function destory($id)
    {
        $this->roles($this->url);
        if (!$this->canDelete) {
            return inertia('403');
        }

        $record = $this->model::find($id);
        if ($record) {
            $record = $this->beforeDestory($record);
            $record->delete();
            $this->afterDestory($record);

            return Alert::make(__(Str::ucfirst(Str::singular($this->table)) . " Deleted Success"))->fire();
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
                        $this->roles($this->url);
                        if (!$this->canDeleteAny) {
                            return inertia('403');
                        }
                        $record->delete();
                        $this->afterBulk($request, $record);
                    }
                }
            }

            return Alert::make(__(Str::ucfirst(Str::singular($this->table)) . " Bulk Action Success"))->fire();
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
        return Router::make($this->table)->controller(static::class)->custom($this->route())->get();
    }

    public function menus()
    {
        $menus = [
            $this->group => Menu::make(Str::ucfirst($this->table))->lang($this->table . '.sidebar')->icon($this->icon)->route($this->table . '.index')->can('view_any_' . $this->table)
        ];
        return array_merge($menus, $this->menu());
    }
}
