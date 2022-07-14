<?php

namespace Modules\Notifications\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Customer;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Row;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Modules\Base\Helpers\Vilt\Handler;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Vilt\AdminListing;
use Modules\Notifications\Entities\UserToken;
use Modules\Notifications\Events\PushNotification;
use Modules\Notifications\Helpers\SendNotification;
use Modules\Notifications\Entities\UserNotification;
use Modules\Notifications\Entities\NotifiactionsTemplates;

class UserNotificationController extends Controller
{
    use Handler;

    public $url = "user_notifications";

    public function schema()
    {
        $models = [];


        $rows = [
            Row::make('id')->label(__('ID'))->create(false)->edit(false)->get(),

            Row::make('template_id')->label(__('Template'))->type('hasOne')->options(NotifiactionsTemplates::all()->toArray())->track_by_name('name')->get(),

            Row::make('privacy')->label(__('Privacy'))->create(false)->edit(false)->type('select')->options(["public", "private"])->get(),

            Row::make('model_id')->label(__('User'))->create(false)->edit(false)->type('hasOne')->options([])->get(),
            Row::make('model_type')->label(__('User'))->view(false)->list(false)->create(false)->edit(false)->type('hasOne')->options([])->get(),
            Row::make('created_at')->label(__('Date'))->create(false)->edit(false)->type('datetime')->options([])->get()

        ];

        return array_merge($rows, $models);
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
        $data = AdminListing::create(UserNotification::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['model_type'],

            );

        foreach ($data as $item) {
            if ($item->model_id && $item->model_type) {
                $item->model_id = $item->model_type::find($item->model_id);
            } else {
                $item->model_id = "";
            }
            $item->template_id = NotifiactionsTemplates::find($item->template_id);
        }

        $this->loadMedia($data);
        $this->loadFilters($request);


        return inertia('UserNotification/List', $this->response($data, $this->url, [
            "users" => User::all()->toArray(),
            "customers" => Customer::all()->toArray()
        ]));
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
            "template_id" => "required|array",
            "privacy" => "required|max:255|string",
            "provider" => "required",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $local = Cookie::get('lang');
            if (empty($local)) {
                $local = "en";
            }
            $getRequest = $request->all();
            $getRequest['model_type'] = $getRequest['model_type']['id'];
            if ($getRequest['model_id']) {
                $getRequest['model_id'] = $getRequest['model_id']['id'];
            } else {
                $getRequest['model_id'] = null;
            }

            SendNotification::make($getRequest['template_id']['title'][$local])
                ->template($getRequest['template_id']['key'])
                ->database(true)
                ->privacy($getRequest['privacy'])
                ->model($getRequest['model_type'])
                ->model_id($getRequest['model_id'])
                ->provider([$request->get('provider')])
                ->lang($local)
                ->send();

            session(["message" => "UserNotification Created Success"]);
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

        $record = UserNotification::find($id);

        $rules = [
            "title" => "sometimes|string",
            "url" => "sometimes|string",
            "icon" => "sometimes|string",
            "description" => "sometimes|string",
            "type" => "sometimes|array",
            "privacy" => "sometimes|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest = $this->proccessSelect($getRequest);
            $record->update($getRequest);
            if ($record->model_id) {
                $record->model_type = config('notifications.models')[0];
            }
            $record->save();
            $this->processUpdateMedia($request, $record);

            session(["message" => "UserNotification Updated Success"]);
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

        $record = UserNotification::find($id);
        if ($record) {
            $record->delete();

            session(["message" => "UserNotification Deleted Success"]);
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

                $record = UserNotification::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => "UserNotification Bulk Action Success"]);
            return back();
        }
    }

    public function token(Request $request)
    {
        $request->validate([
            "token" => "required|string",
            "provider" => "required|string",
            "model" => "required|string",
            "model_id" => "required"
        ]);

        $checkEx = UserToken::where('model_type', $request->get('model'))
            ->where('model_id', $request->get('model_id'))
            ->where('provider', $request->get('provider'))
            ->first();

        if (!$checkEx) {
            $token = new UserToken();
            $token->model_type = $request->get('model');
            $token->model_id = $request->get('model_id');
            $token->provider = $request->get('provider');
            $token->provider_token = $request->get('token');
            $token->save();

            return back();
        } else {
            $checkEx->provider_token = $request->get('token');
            $checkEx->save();

            return back();
        }
    }
}
