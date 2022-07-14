<?php

namespace Modules\Notifications\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Row;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Models\NotificationType;
use Illuminate\Support\Facades\File;
use Modules\Base\Helpers\Vilt\Handler;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Vilt\AdminListing;
use Modules\Notifications\Entities\NotifiactionsTemplates;

class NotifiactionsTemplatesController extends Controller
{
    use Handler;

    public $url = "notifiactions_templates";

    public function schema()
    {
        $getLocals = config('translations.locals');
        $loadLocals = [];
        foreach ($getLocals as $key => $value) {
            array_push($loadLocals, Row::make($key)->label($value)->get());
        }

        return [
            Row::make('id')->label(__('Id'))->create(false)->edit(false)->get(),

            Row::make('image')->label(__('Image'))->preview(true)->type('image')->get(),

            Row::make('name')->label(__('Name'))->get(),
            Row::make('body')->label(__('Body'))->list(false)->type('schema-area')->options($loadLocals)->get(),


            Row::make('key')->label(__('Key'))->list(false)->get(),

            Row::make('url')->label(__('Url'))->url(true)->get(),


            Row::make('title')->label(__('Title'))->list(false)->type('schema-area')->options($loadLocals)->get(),

            Row::make('icon')->label(__('Icon'))->list(false)->get(),

            Row::make('type')->label(__('Type'))->list(false)->type('select-value')->options(NotificationType::all()->toArray())->track_by_name('type')->track_by_id('id')->get(),

            Row::make('roles')->label(__('Roles'))->list(false)->type('relation')->multi(true)->options(Role::all()->toArray())->get(),

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
        $data = AdminListing::create(NotifiactionsTemplates::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['name'],

                function ($q) {
                    $q->with('roles');
                }

            );

        $this->loadMedia($data);
        $this->loadFilters($request);


        foreach ($data as $item) {
            if ($item->type) {
                $item->type = NotificationType::where('type',  $item->type)->first();
            }
        }


        return inertia('NotifiactionsTemplates/List', $this->response($data, $this->url));
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
            "name" => "required|max:255|string",
            "key" => "required|max:255|unique:notifiactions_templates,key|string",
            "body" => "required|array|min:2",
            "title" => "required|array|min:2",
            "url" => "max:255",
            "icon" => "max:255",
            "type" => "array",
            "roles" => "array"
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['type'] = $getRequest['type']['type'];
            $record = NotifiactionsTemplates::create($getRequest);

            if ($request->has('roles')) {
                foreach ($request->get('roles') as $role) {
                    $record->roles()->attach($role['id']);
                }
            }

            $this->processCreateMedia($request, $record);

            session(["message" => __("Notifiactions Templates  Created Success")]);
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

        $record = NotifiactionsTemplates::find($id);

        $rules = [
            "name" => "sometimes|string",
            "key" => "sometimes|string|unique:notifiactions_templates,key," . $id,
            "body" => "sometimes|array|min:2",
            "title" => "sometimes|array|min:2",
            "url" => "sometimes",
            "icon" => "sometimes",
            "type" => "array",
            "roles" => "array"
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['type'] = $getRequest['type']['type'];
            $record->update($getRequest);
            $this->processUpdateMedia($request, $record);


            if ($request->has('roles')) {
                foreach ($request->get('roles') as $role) {
                    $record->roles()->sync($role['id']);
                }
            }

            session(["message" => __("Notifiactions Templates  Updated Success")]);
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

        $record = NotifiactionsTemplates::find($id);
        if ($record) {
            $record->delete();

            session(["message" => __("Notifiactions Templates  Deleted Success")]);
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

                $record = NotifiactionsTemplates::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => __("Notifiactions Templates  Bulk Action Success")]);
            return back();
        }
    }
}
