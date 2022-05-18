<?php
namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\CustomersLocation;
use Modules\Base\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Handler;
use Modules\Base\Helpers\Vilt\AdminListing;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class CustomersLocationController extends Controller
{
    use Handler;

    public $url = "customers_locations";

    public function schema()
    {
        return [
                                Row::make('id')->label('id')->create(false)->edit(false)->get(),
        
                        Row::make('customer_id')->label('customer')->type('hasOne')->list(false)->options(\App\Models\Customer::all()->toArray())->get(),
                
                        Row::make('address')->label('address')->type('textarea')->get(),
        
                        Row::make('country')->label('country')->get(),
        
                        Row::make('city')->label('city')->get(),
        
                        Row::make('area')->label('area')->get(),
        
                        Row::make('home')->label('home')->type('number')->get(),
        
                        Row::make('flat')->label('flat')->type('number')->get(),
        
                        Row::make('floor')->label('floor')->type('number')->get(),
        
                        Row::make('active')->label('active')->type('switch')->get(),
        
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
        if(!$this->canView){
            return inertia('403');
        }

        // create and AdminListing instance for a specific model and
        $data = AdminListing::create(CustomersLocation::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                                // set columns to searchIn
                ['country'],

            );

        $this->loadMedia($data);
        $this->loadFilters($request);

                foreach($data as $item){
                                                                            $item->customer_id = \App\Models\Customer::find($item->customer_id);
                                                                                                                                                                                                                                                                    }
        
        return inertia('CustomersLocation/List',$this->response($data, $this->url));
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
        if(!$this->canCreate){
            return inertia('403');
        }

        $rules = [
                                                                "customer_id" => "required|array",
                                        "address" => "required|max:65535|string",
                                        "country" => "required|max:255|string",
                                        "city" => "required|max:255|string",
                                        "area" => "required|max:255|string",
                                        "home" => "required|string",
                                        "flat" => "required|string",
                                        "floor" => "required|string",
                                        "active" => "required|bool",
                        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
                                                                        $getRequest['customer_id'] = $getRequest['customer_id']['id'];
                                                                                                                                                                                                                                                                        $record = CustomersLocation::create($getRequest);

            $this->processCreateMedia($request, $record);

            session(["message" => "CustomersLocation Created Success"]);
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
        if(!$this->canEdit){
            return inertia('403');
        }

        $record = CustomersLocation::find($id);

        $rules = [
                                                                "customer_id" => "sometimes|array",
                                        "address" => "sometimes|string",
                                        "country" => "sometimes|string",
                                        "city" => "sometimes|string",
                                        "area" => "sometimes|string",
                                        "home" => "sometimes|integer",
                                        "flat" => "sometimes|integer",
                                        "floor" => "sometimes|integer",
                                        "active" => "sometimes|boolean",
                        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
                                                                        $getRequest['customer_id'] = $getRequest['customer_id']['id'];
                                                                                                                                                                                                                                                                        $record->update($getRequest);
            $this->processUpdateMedia($request, $record);

            session(["message" => "CustomersLocation Updated Success"]);
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
        if(!$this->canDelete){
            return inertia('403');
        }

        $record = CustomersLocation::find($id);
        if ($record) {
            $record->delete();

            session(["message" => "CustomersLocation Deleted Success"]);
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
                if(!$this->canDeleteAny){
                    return inertia('403');
                }

                $record = CustomersLocation::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => "CustomersLocation Bulk Action Success"]);
            return back();
        }
    }
}
