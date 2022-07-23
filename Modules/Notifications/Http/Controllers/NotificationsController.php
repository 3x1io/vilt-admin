<?php

namespace Modules\Notifications\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Resources\Query;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Base\Helpers\Resources\Row;
use Modules\Notifications\Entities\UserNotification;
use Modules\Notifications\Entities\UserToken;

class NotificationsController extends Resource
{
    public $model = UserNotification::class;

    public function rows()
    {
        $rows = [
            Row::make('id')->label(__('ID'))->create(false)->edit(false)->get(),
            Row::make('image')->label(__('Image'))->type('image')->preview(true)->get(),
            Row::make('template_id')->label(__('Template'))->list(false)->view(false)->get(),
            Row::make('title')->label(__('Title'))->get(),
            Row::make('description')->list(false)->label(__('Description'))->get(),
            Row::make('icon')->label(__('Icon'))->type('icon')->get(),
            Row::make('type')->label(__('Type'))->get(),
            Row::make('url')->label(__('URL'))->url(true)->get(),
            Row::make('created_at')->type('datetime')->label(__('Date'))->get(),
        ];

        return $rows;
    }

    public function index(Request $request)
    {
        // create and AdminListing instance for a specific model and
        $data = Query::create(UserNotification::class)
            ->modifyQuery(function ($q) use ($request) {
                $q->with('template')->where('model_type', 'App\Models\User')->where('model_id', $request->user()->id)->orWhere('privacy', 'public');
            })
            ->processRequestAndGet(
            // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                $this->searchFileds()

            );


        $this->loadFilters($request);
        $this->canCreate = false;
        $this->canEdit = false;

        return inertia('Resource', $this->response($data, 'admin.notifications'));
    }

    public function userDestroy($id)
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

    public function userBulk(Request $request)
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

    public function clearUser(Request $request)
    {
        UserNotification::where('model_type', 'App\Models\User')->where('model_id', $request->user()->id)->delete();
        session(["message" => "Your Notifications Has Been Deleted"]);
        return back();
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

    public  function  routes(){
        return [];
    }
}
