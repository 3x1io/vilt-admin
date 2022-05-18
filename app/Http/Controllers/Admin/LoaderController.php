<?php
namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Loader;
use Modules\Base\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Handler;
use Modules\Base\Helpers\Vilt\AdminListing;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class LoaderController extends Controller
{
    use Handler;

    public $url = "loaders";

    public function schema()
    {
        return [
                                Row::make('id')->label('id')->create(false)->edit(false)->get(),
        
                        Row::make('start_date')->label('start_date')->type('datetime')->get(),
        
                        Row::make('end_date')->label('end_date')->type('datetime')->get(),
        
                        Row::make('time')->label('time')->type('time')->get(),
        
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
        $data = AdminListing::create(Loader::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                                // set columns to searchIn
                ['id'],

            );

        $this->loadMedia($data);
        $this->loadFilters($request);

        
        return inertia('Loader/List',$this->response($data, $this->url));
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
                                                                "start_date" => "required|string",
                                        "end_date" => "required|string",
                                        "time" => "required|string",
                        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
                                                                                                                                        $record = Loader::create($getRequest);

            $this->processCreateMedia($request, $record);

            session(["message" => "Loader Created Success"]);
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

        $record = Loader::find($id);

        $rules = [
                                                                "start_date" => "sometimes|date",
                                        "end_date" => "sometimes|date",
                                        "time" => "sometimes|string",
                        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
                                                                                                                                        $record->update($getRequest);
            $this->processUpdateMedia($request, $record);

            session(["message" => "Loader Updated Success"]);
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

        $record = Loader::find($id);
        if ($record) {
            $record->delete();

            session(["message" => "Loader Deleted Success"]);
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

                $record = Loader::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => "Loader Bulk Action Success"]);
            return back();
        }
    }
}
