<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Customer;
use Modules\Base\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Handler;
use Modules\Base\Helpers\Vilt\AdminListing;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    use Handler;

    public $url = "customers";

    public function schema()
    {
        return [
            Row::make('id')->label('id')->create(false)->edit(false)->get(),

            Row::make('group_id')->label('group')->type('hasOne')->list(false)->options(\App\Models\Group::all()->toArray())->get(),

            Row::make('name')->label('name')->get(),

            Row::make('phone')->label('phone')->type('tel')->get(),

            Row::make('email')->label('email')->type('email')->get(),

            Row::make('login')->label('login')->type('switch')->get(),

            Row::make('password')->label('password')->type('password')->list(false)->view(false)->get(),
            Row::make('password_confirmation')->label("Password Confirmation")->type('password')->list(false)->view(false)->get(),

            Row::make('address')->label('address')->type('textarea')->get(),

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
        $data = AdminListing::create(Customer::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['name'],

            );

        $this->loadMedia($data);
        $this->loadFilters($request);

        foreach ($data as $item) {
            $item->group_id = \App\Models\Group::find($item->group_id);
            unset($item->password);
            unset($item->password_confirmation);
        }

        return inertia('Customer/List', $this->response($data, $this->url));
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
            "group_id" => "array",
            "name" => "required|max:255|string",
            "phone" => "required|max:255|unique:customers,phone|string",
            "email" => "required|max:255|unique:customers,email|email|string",
            "login" => "required|bool",
            "password" => "required|max:255|string|min:8|confirmed",
            "address" => "max:65535|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['group_id'] = $getRequest['group_id']['id'];
            $record = Customer::create($getRequest);

            $this->processCreateMedia($request, $record);

            session(["message" => "Customer Created Success"]);
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

        $record = Customer::find($id);

        $rules = [
            "group_id" => "sometimes|array",
            "name" => "sometimes|string",
            "phone" => "sometimes|string|unique:customers,phone," . $id,
            "email" => "sometimes|string|email|unique:customers,email," . $id,
            "login" => "sometimes|boolean",
            "password" => "sometimes|string|min:8|confirmed",
            "address" => "sometimes|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            $getRequest['group_id'] = $getRequest['group_id']['id'];
            $record->update($getRequest);
            $this->processUpdateMedia($request, $record);

            session(["message" => "Customer Updated Success"]);
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

        $record = Customer::find($id);
        if ($record) {
            $record->delete();

            session(["message" => "Customer Deleted Success"]);
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

                $record = Customer::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => "Customer Bulk Action Success"]);
            return back();
        }
    }
}
