<?php

namespace Modules\Menu\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Modules\Menu\Entities\Menus;
use Modules\Base\Helpers\Vilt\Row;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Cookie;
use Modules\Base\Helpers\Vilt\Handler;
use Modules\Menu\Entities\MenusGroups;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Resources\Render;
use Modules\Base\Helpers\Vilt\AdminListing;
use Modules\Base\Helpers\Resources\Controller;
use App\Http\Controllers\Controller as BaseController;

class MenusController extends BaseController
{
    use Controller;

    public function schema()
    {
        $routeList = [];
        $routeCollection = Route::getRoutes();
        foreach ($routeCollection as $key => $route) {
            $show = false;
            foreach ($route->methods as $method) {
                if ($method === 'GET') {
                    $show = true;
                }
            }
            if ($show) {
                if (isset($route->action['as'])) {
                    array_push($routeList, [
                        "name" => $route->uri,
                        "id" => $route->action['as']
                    ]);
                } else {
                    array_push($routeList, [
                        "name" => $route->uri,
                        "id" => $route->uri
                    ]);
                }
            }
        }

        $getLocals = config('translations.locals');
        $loadLocals = [];
        foreach ($getLocals as $key => $value) {
            array_push($loadLocals, Row::make($key)->label($value)->get());
        }

        return [
            Row::make('id')->label(__('Id'))->create(false)->edit(false)->get(),

            Row::make('group_id')->label('group')->type('hasOne')->create(false)->edit(false)->track_by_name('title')->options([])->get(),

            Row::make('title')->label(__('Title'))->type('schema')->options($loadLocals)->get(),

            Row::make('description')->label(__('Description'))->type('schema')->options($loadLocals)->get(),

            Row::make('icon')->type('icon')->label(__('Icon'))->get(),

            Row::make('type')->label(__('Type'))->type('select-value')->options([
                [
                    "name" => __('Route'),
                    "id" => "route"
                ],
                [
                    "name" => __('URL'),
                    "id" => "url"
                ]
            ])->get(),

            Row::make('route')->label(__('Route'))->type('select-value')->options($routeList)->reactive([
                "name" => __('Route'),
                "id" => "route"
            ])->row('type')->get(),

            Row::make('url')->label(__('Url'))->reactive([
                "name" => __('URL'),
                "id" => "url"
            ])->row('type')->get(),

            Row::make('sort')->label(__('Sort'))->type('number')->default(0)->get(),

            Row::make('target')->label(__('Target'))->type('switch')->get(),

            Row::make('can')->label(__('Can'))->get(),

            Row::make('badge')->label(__('Badge'))->type('schema')->options($loadLocals)->get(),

            Row::make('counter')->label(__('Counter'))->get(),

        ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return  \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->roles('menus');
        if (!$this->canView) {
            return inertia('403');
        }

        // create and AdminListing instance for a specific model and
        $data = AdminListing::create(Menus::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['title'],

                function ($q) use ($request) {
                    $q->whereHas('group', function ($query) {
                        $query->where('type', 'group');
                    });
                }

            );


        $this->loadMedia($data);
        $this->loadFilters($request);

        foreach ($data as $item) {
            $item->group_id = \Modules\Menu\Entities\MenusGroups::find($item->group_id);

            if (empty($item->name)) {
                $item->name = [
                    "en" => "",
                    "ar" => ""
                ];
            }
            if (empty($item->description)) {
                $item->description = [
                    "en" => "",
                    "ar" => ""
                ];
            }
            if (empty($item->badge)) {
                $item->badge = [
                    "en" => "",
                    "ar" => ""
                ];
            }
            if ($item->type === 'route') {
                $item->type = [
                    "name" => __('Route'),
                    "id" => "route"
                ];
            } else if ($item->type === 'url') {
                $item->type = [
                    "name" => __('Url'),
                    "id" => "url"
                ];
            }
            if ($item->route) {
                $item->route = [
                    "name" => $item->route,
                    "id" => $item->route
                ];
            }

            $item->traget = (bool)$item->traget;
        }
        $menuGroups = MenusGroups::where('type', 'group')->get();

        return  Render::make('Menus/List')->module('Menus')->data($this->response($data, $this->url, [
            "groups" => $menuGroups
        ]))->render();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param    \Illuminate\Http\Request  $request
     * @return  \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->roles('menus');
        if (!$this->canCreate) {
            return inertia('403');
        }

        $rules = [
            "group_id" => "array",
            "title" => "required|array",
            "description" => "array",
            "route" => "array",
            "type" => "array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['route'] = $getRequest['route']['id'];
            $getRequest['type'] = $getRequest['type']['id'];
            $getRequest['group_id'] = $getRequest['group_id']['id'];
            $record = Menus::create($getRequest);

            $this->processCreateMedia($request, $record);

            session(["message" => __("Menus  Created Success")]);
            return back();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param    \Illuminate\Http\Request  $request
     * @param    int  $id
     * @return  \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->roles('menus');
        if (!$this->canEdit) {
            return inertia('403');
        }

        $record = Menus::find($id);

        $rules = [
            "group_id" => "sometimes|array",
            "title" => "sometimes|array",
            "description" => "sometimes|array",
            "route" => "sometimes|array",
            "type" => "sometimes|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['route'] = $getRequest['route']['id'];
            $getRequest['type'] = $getRequest['type']['id'];
            $getRequest['group_id'] = $getRequest['group_id']['id'];
            $record->update($getRequest);
            $this->processUpdateMedia($request, $record);

            session(["message" => __("Menus  Updated Success")]);
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param    int  $id
     * @return  \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->roles('menus');
        if (!$this->canDelete) {
            return inertia('403');
        }

        $record = Menus::find($id);
        if ($record) {
            $record->delete();

            session(["message" => __("Menus  Deleted Success")]);
            return back();
        }
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
            foreach ($request->get('ids') as $key => $value) {
                $this->roles('menus');
                if (!$this->canDeleteAny) {
                    return inertia('403');
                }

                $record = Menus::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => __("Menus  Bulk Action Success")]);
            return back();
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return  \Illuminate\Http\Response
     */
    public function indexCustomer(Request $request)
    {
        $this->roles('menus');
        if (!$this->canView) {
            return inertia('403');
        }

        // create and AdminListing instance for a specific model and
        $data = AdminListing::create(Menus::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['title'],

                function ($q) use ($request) {
                    $q->whereHas('group', function ($query) {
                        $query->where('type', 'front');
                    });
                }

            );


        if ($request->has('group')) {
            $this->filters['group'] = $request->get('group');
        }

        $this->loadMedia($data);
        $this->loadFilters($request);

        foreach ($data as $item) {
            $item->group_id = \Modules\Menu\Entities\MenusGroups::find($item->group_id);

            if (empty($item->name)) {
                $item->name = [
                    "en" => "",
                    "ar" => ""
                ];
            }
            if (empty($item->description)) {
                $item->description = [
                    "en" => "",
                    "ar" => ""
                ];
            }
            if (empty($item->badge)) {
                $item->badge = [
                    "en" => "",
                    "ar" => ""
                ];
            }
            if ($item->type === 'route') {
                $item->type = [
                    "name" => __('Route'),
                    "id" => "route"
                ];
            } else if ($item->type === 'url') {
                $item->type = [
                    "name" => __('Url'),
                    "id" => "url"
                ];
            }
            if ($item->route) {
                $item->route = [
                    "name" => $item->route,
                    "id" => $item->route
                ];
            }

            $item->traget = (bool)$item->traget;
        }

        $menuGroups = MenusGroups::where('type', 'front')->get();



        return inertia('Menus/Customer', $this->response($data, "menus.customer", [
            "groups" => $menuGroups
        ]));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param    \Illuminate\Http\Request  $request
     * @return  \Illuminate\Http\Response
     */
    public function storeCustomer(Request $request)
    {
        $this->roles('menus');
        if (!$this->canCreate) {
            return inertia('403');
        }

        $rules = [
            "group_id" => "array",
            "title" => "required|array",
            "description" => "array",
            "route" => "array",
            "type" => "array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['route'] = $getRequest['route']['id'];
            $getRequest['type'] = $getRequest['type']['id'];
            $getRequest['group_id'] = $getRequest['group_id']['id'];
            $record = Menus::create($getRequest);

            $this->processCreateMedia($request, $record);

            session(["message" => __("Menus  Created Success")]);
            return back();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param    \Illuminate\Http\Request  $request
     * @param    int  $id
     * @return  \Illuminate\Http\Response
     */
    public function updateCustomer(Request $request, $id)
    {
        $this->roles('menus');
        if (!$this->canEdit) {
            return inertia('403');
        }

        $record = Menus::find($id);

        $rules = [
            "group_id" => "sometimes|array",
            "title" => "sometimes|array",
            "description" => "sometimes|array",
            "route" => "sometimes|array",
            "type" => "sometimes|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['route'] = $getRequest['route']['id'];
            $getRequest['type'] = $getRequest['type']['id'];
            $getRequest['group_id'] = $getRequest['group_id']['id'];
            $record->update($getRequest);
            $this->processUpdateMedia($request, $record);

            session(["message" => __("Menus  Updated Success")]);
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param    int  $id
     * @return  \Illuminate\Http\Response
     */
    public function destroyCustomer($id)
    {
        $this->roles('menus');
        if (!$this->canDelete) {
            return inertia('403');
        }

        $record = Menus::find($id);
        if ($record) {
            $record->delete();

            session(["message" => __("Menus  Deleted Success")]);
            return back();
        }
    }


    public function bulkCustomer(Request $request)
    {

        $rules = [
            "action" => "required",
            "ids" => "required|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            foreach ($request->get('ids') as $key => $value) {
                $this->roles('menus');
                if (!$this->canDeleteAny) {
                    return inertia('403');
                }

                $record = Menus::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => __("Menus  Bulk Action Success")]);
            return back();
        }
    }
}
