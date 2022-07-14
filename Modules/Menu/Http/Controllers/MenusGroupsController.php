<?php

namespace Modules\Menu\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Row;
use Illuminate\Support\Facades\File;
use Modules\Base\Helpers\Vilt\Handler;
use Modules\Menu\Entities\MenusGroups;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Vilt\AdminListing;
use Modules\Base\Helpers\Resources\Controller;
use App\Http\Controllers\Controller as BaseController;
use Modules\Base\Helpers\Resources\Render;

class MenusGroupsController extends BaseController
{
    use Controller;


    public function schema()
    {
        $getLocals = config('translations.locals');
        $loadLocals = [];
        foreach ($getLocals as $key => $value) {
            array_push($loadLocals, Row::make($key)->label($value)->get());
        }

        return [
            Row::make('id')->label(__('Id'))->create(false)->edit(false)->get(),

            Row::make('type')->label(__('Type'))->type('select-value')->options([
                [
                    "name" => __('Group'),
                    "id" => "group",
                ],
                [
                    "name" => __('Front'),
                    "id" => "front",
                ]
            ])->get(),

            Row::make('name')->label(__('Name'))->type('schema')->options($loadLocals)->get(),

            Row::make('icon')->type('icon')->label(__('Icon'))->get(),

            Row::make('badge')->label(__('Badge'))->type('schema')->options($loadLocals)->get(),

            Row::make('counter')->default(0)->type('number')->label(__('Counter'))->get(),

            Row::make('can')->label(__('Can'))->get(),

        ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return  \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->roles($this->url);
        if (!$this->canView) {
            return inertia('403');
        }

        // create and AdminListing instance for a specific model and
        $data = AdminListing::create(MenusGroups::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['name'],

            );

        foreach ($data as $item) {
            if (empty($item->name)) {
                $item->name = [
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
            if ($item->type === 'group') {
                $item->type =                 [
                    "name" => __('Group'),
                    "id" => "group",
                ];
            } else if ($item->type === 'front') {
                $item->type = [
                    "name" => __('Front'),
                    "id" => "front",
                ];
            }
        }
        $this->loadMedia($data);
        $this->loadFilters($request);

        return Render::make('MenusGroups/List')->module('Menu')->data($this->response($data, $this->url))->render();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param    \Illuminate\Http\Request  $request
     * @return  \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->roles($this->url);
        if (!$this->canCreate) {
            return inertia('403');
        }

        $rules = [
            "name" => "required|max:255|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['type'] = $getRequest['type']['id'];
            $record = MenusGroups::create($getRequest);

            $this->processCreateMedia($request, $record);

            session(["message" => __("Menus Groups  Created Success")]);
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
        $this->roles($this->url);
        if (!$this->canEdit) {
            return inertia('403');
        }

        $record = MenusGroups::find($id);

        $rules = [
            "name" => "sometimes|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['type'] = $getRequest['type']['id'];
            $record->update($getRequest);
            $this->processUpdateMedia($request, $record);

            session(["message" => __("Menus Groups  Updated Success")]);
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
        $this->roles($this->url);
        if (!$this->canDelete) {
            return inertia('403');
        }

        $record = MenusGroups::find($id);
        if ($record) {
            $record->delete();

            session(["message" => __("Menus Groups  Deleted Success")]);
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
                $this->roles($this->url);
                if (!$this->canDeleteAny) {
                    return inertia('403');
                }

                $record = MenusGroups::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => __("Menus Groups  Bulk Action Success")]);
            return back();
        }
    }
}
