<?php
namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Group;
use Modules\Base\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Handler;
use Modules\Base\Helpers\Vilt\AdminListing;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class GroupController extends Controller
{
    use Handler;

    public $url = "groups";

    public function schema()
    {
        return [
                                Row::make('id')->label(__('groups.id'))->create(false)->edit(false)->get(),
        
                        Row::make('name')->label(__('groups.name'))->get(),
        
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
        $data = AdminListing::create(Group::class)
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

        
        return inertia('Group/List',$this->response($data, $this->url));
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
                                                                "name" => "required|max:255|string",
                        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
                                                                                $record = Group::create($getRequest);

            $this->processCreateMedia($request, $record);

            session(["message" => "Group Created Success"]);
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

        $record = Group::find($id);

        $rules = [
                                                                "name" => "sometimes|string",
                        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
                                                                                $record->update($getRequest);
            $this->processUpdateMedia($request, $record);

            session(["message" => "Group Updated Success"]);
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

        $record = Group::find($id);
        if ($record) {
            $record->delete();

            session(["message" => "Group Deleted Success"]);
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

                $record = Group::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => "Group Bulk Action Success"]);
            return back();
        }
    }
}
