<?php

namespace Modules\Notifications\Http\Controllers;

use App\Models\User;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Base\Helpers\Vilt\Row;
use Modules\Base\Helpers\Vilt\Handler;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Vilt\AdminListing;
use Illuminate\Contracts\Support\Renderable;
use Modules\Notifications\Helpers\SendNotification;
use Modules\Notifications\Entities\UserNotification;
use Modules\Notifications\Entities\NotifiactionsTemplates;

class NotificationsController extends Controller
{
    use Handler;

    public $url = "user_notifications";

    public function schema()
    {

        $rows = [
            Row::make('id')->label(__('ID'))->create(false)->edit(false)->get(),

            Row::make('image')->label(__('Image'))->type('image')->preview(true)->get(),

            Row::make('template_id')->label(__('Template'))->list(false)->view(false)->get(),
            Row::make('title')->label(__('Title'))->get(),
            Row::make('description')->list(false)->label(__('Description'))->get(),
            Row::make('icon')->label(__('Icon'))->type('icon')->get(),
            Row::make('type')->label(__('Type'))->get(),
            Row::make('url')->label(__('URL'))->get(),
            Row::make('created_at')->type('datetime')->label(__('Date'))->get(),
        ];

        return $rows;
    }


    public function user(Request $request)
    {
        // create and AdminListing instance for a specific model and
        $data = AdminListing::create(UserNotification::class)
            ->modifyQuery(function ($q) use ($request) {
                $q->where('model_type', 'App\Models\User')->where('model_id', $request->user()->id);
            })
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['id'],

            );

        foreach ($data as $item) {
            $item->model_id = Customer::find($item->model_id);
            $template = NotifiactionsTemplates::find($item->template_id);
            if ($item->template_id) {
                $item->image = count($template->getMedia('image')) ? $template->getMedia('image')->first()->getUrl() : url('images/default.png');
            }
            $item->template_id = $template;
        }

        $this->loadFilters($request);



        return inertia('UserNotification/User', $this->response($data, 'admin.notifications'));
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param    int  $id
     * @return  \Illuminate\Http\Response
     */
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

    public function customer(Request $request)
    {
        // create and AdminListing instance for a specific model and
        $data = AdminListing::create(UserNotification::class)
            ->modifyQuery(function ($q) use ($request) {
                $q->where('model_type', 'App\Models\Customer')->where('model_id', $request->user()->id);
            })
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['id'],

            );



        foreach ($data as $item) {
            $item->model_id = Customer::find($item->model_id);
            $template = NotifiactionsTemplates::find($item->template_id);
            if ($item->template_id) {
                $item->image = count($template->getMedia('image')) ? $template->getMedia('image')->first()->getUrl() : url('images/default.png');
            }
            $item->template_id = $template;
        }

        $this->loadFilters($request);


        return inertia('UserNotification/Customer', $this->response($data, 'profile.notifications'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param    int  $id
     * @return  \Illuminate\Http\Response
     */
    public function customerDestroy($id)
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


    public function customerBulk(Request $request)
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

    public function clearCustomer(Request $request)
    {
        UserNotification::where('model_type', 'App\Models\Customer')->where('model_id', $request->user()->id)->delete();
        session(["message" => "Your Notifications Has Been Deleted"]);
        return back();
    }
}
