<?php

namespace Modules\Notifications\Http\Controllers;

use Inertia\Inertia;
use Modules\Notifications\Entities\NotificationsLogs;
use Modules\Base\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Handler;
use Modules\Base\Helpers\Vilt\AdminListing;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class NotificationsLogsController extends Controller
{
    use Handler;

    public $url = "notifications_logs";

    public function schema()
    {
        return [
            Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

            Row::make('model_type')->list(false)->view(false)->label(__('Model Type '))->get(),

            Row::make('model_id')->type('hasOne')->options([])->label(__('User'))->get(),

            Row::make('title')->label(__('Title '))->get(),

            Row::make('description')->list(false)->label(__('Description '))->get(),

            Row::make('type')->list(false)->label(__('Type '))->get(),
            Row::make('provider')->label(__('Provider'))->get(),
            Row::make('created_at')->label(__('Date'))->type('datetime')->get(),

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
        $data = AdminListing::create(NotificationsLogs::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['model_type'],

            );

        $this->loadMedia($data);
        $this->loadFilters($request);

        foreach ($data as $item) {
            $item->model_id = $item->model_type::find($item->model_id);
        }


        return inertia('NotificationsLogs/List', $this->response($data, $this->url));
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
            "model_type" => "max:255|string",
            "model_id" => "string",
            "title" => "required|max:255|string",
            "description" => "max:255|string",
            "type" => "required|max:255|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $record = NotificationsLogs::create($getRequest);

            $this->processCreateMedia($request, $record);

            session(["message" => __("Notifications Logs  Created Success")]);
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

        $record = NotificationsLogs::find($id);

        $rules = [
            "model_type" => "sometimes|string",
            "model_id" => "sometimes|string",
            "title" => "sometimes|string",
            "description" => "sometimes|string",
            "type" => "sometimes|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $record->update($getRequest);
            $this->processUpdateMedia($request, $record);

            session(["message" => __("Notifications Logs  Updated Success")]);
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

        $record = NotificationsLogs::find($id);
        if ($record) {
            $record->delete();

            session(["message" => __("Notifications Logs  Deleted Success")]);
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

                $record = NotificationsLogs::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => __("Notifications Logs  Bulk Action Success")]);
            return back();
        }
    }
}
