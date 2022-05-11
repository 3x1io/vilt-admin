<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Customer;
use App\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use App\Helpers\Vilt\Handler;
use App\Helpers\Vilt\AdminListing;
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
            Row::make('id')->label('ID')->edit(false)->create(false)->get(),
            Row::make('name')->label(__('customers.name'))->get(),
            Row::make('email')->label('email')->type('email')->get(),
            Row::make('phone')->label('phone')->type('tel')->get(),
            Row::make('address')->label('address')->get(),
            Row::make('created_at')->label('created_at')->list(false)->create(false)->edit(false)->type('datetime')->get(),
            Row::make('updated_at')->label('updated_at')->list(false)->create(false)->edit(false)->type('datetime')->get(),
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
                ['id', 'name'],

            );

        $this->loadMedia($data);
        $this->loadFilters($request);

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
            "name" => "required|string",
            "email" => "required|string|email",
            "phone" => "required|string",
            "address" => "required|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $record = Customer::create($request->all());

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
            "name" => "sometimes|string",
            "email" => "sometimes|string|email",
            "phone" => "sometimes|string",
            "address" => "sometimes|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {

            $record->update($request->all());
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
