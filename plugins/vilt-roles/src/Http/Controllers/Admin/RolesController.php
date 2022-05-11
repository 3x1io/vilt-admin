<?php

namespace io3x1\ViltRoles\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Helpers\Vilt\Row;
use App\Helpers\Vilt\Core;
use App\Helpers\Vilt\Trans;
use Illuminate\Http\Request;
use App\Helpers\Vilt\Handler;
use App\Helpers\Vilt\AdminListing;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Validator;
use App\Helpers\Generator\ResourceGenerator;

class RolesController extends Controller
{
    use Handler;

    public $url = "roles";

    public function schema()
    {
        return [
            Row::make('id')->label('ID')->edit(false)->create(false)->get(),
            Row::make('name')->label('Name')->get(),
            Row::make('guard_name')->label('Guard Name')->get(),
            Row::make('permissions')->label('Permissions')->type('relation')->list(false)->options(Permission::all()->toArray())->multi(true)->get(),
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
        $data = AdminListing::create(Role::class)
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

        foreach ($data as $item) {
            $item->load('permissions');
        }

        $tables = DB::connection()->getDoctrineSchemaManager()->listTableNames();

        return inertia('Role/List', $this->response($data, $this->url, ["tables" => $tables]));
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
            "guard_name" => "required|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $record = Role::create($request->all());

            $this->processCreateMedia($request, $record);

            if ($request->has('permissions')) {
                foreach ($request->get('permissions') as $permission) {
                    $record->givePermissionTo($permission['name']);
                }
            }

            session(["message" => "Role Created Success"]);
            return back();
        }
    }

    public function generate(Request $request)
    {

        $this->roles($this->url);
        if (!$this->canCreate) {
            return inertia('403');
        }

        $rules = [
            "permissions" => "required|array",
            "guard_name" => "required|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            foreach ($request->get('permissions') as $permssion) {
                $checkView = Permission::where('name', 'view_' . $permssion)->where('guard_name', $request->guard_name)->first();
                if (!$checkView) {
                    Permission::create(['name' => 'view_' . $permssion, 'guard_name' => $request->guard_name]);
                }
                $checkViewAny = Permission::where('name', 'view_any_' . $permssion)->where('guard_name', $request->guard_name)->first();
                if (!$checkViewAny) {
                    Permission::create(['name' => 'view_any_' . $permssion, 'guard_name' => $request->guard_name]);
                }
                $checkCreate = Permission::where('name', 'create_' . $permssion)->where('guard_name', $request->guard_name)->first();
                if (!$checkCreate) {
                    Permission::create(['name' => 'create_' . $permssion, 'guard_name' => $request->guard_name]);
                }
                $checkUpdate = Permission::where('name', 'update_' . $permssion)->where('guard_name', $request->guard_name)->first();
                if (!$checkUpdate) {
                    Permission::create(['name' => 'update_' . $permssion, 'guard_name' => $request->guard_name]);
                }
                $checkDelete = Permission::where('name', 'delete_' . $permssion)->where('guard_name', $request->guard_name)->first();
                if (!$checkDelete) {
                    Permission::create(['name' => 'delete_' . $permssion, 'guard_name' => $request->guard_name]);
                }
                $checkExport = Permission::where('name', 'export_' . $permssion)->where('guard_name', $request->guard_name)->first();
                if (!$checkExport) {
                    Permission::create(['name' => 'export_' . $permssion, 'guard_name' => $request->guard_name]);
                }
                $checkDeleteAny = Permission::where('name', 'delete_any_' . $permssion)->where('guard_name', $request->guard_name)->first();
                if (!$checkDeleteAny) {
                    Permission::create(['name' => 'delete_any_' . $permssion, 'guard_name' => $request->guard_name]);
                }
            }

            session(['message' => "Permission Generated Success"]);
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

        $record = Role::find($id);

        $rules = [
            "name" => "sometimes|string",
            "guard_name" => "required|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {

            $record->update($request->all());

            $this->processUpdateMedia($request, $record);

            $getOld = $record->permissions;
            foreach ($getOld as $oldPer) {
                $record->revokePermissionTo($oldPer['name']);
            }
            if ($request->has('permissions')) {
                foreach ($request->get('permissions') as $permission) {
                    $record->givePermissionTo($permission['name']);
                }
            }

            session(['message' => "Role Updated Success"]);
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

        $record = Role::find($id);
        if ($record) {

            $getOld = $record->permissions;
            foreach ($getOld as $oldPer) {
                $record->revokePermissionTo($oldPer->name, $record->guard_name);
            }
            $record->delete();

            session(['message' => "Role Deleted Success"]);
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
                $record = Role::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $this->roles($this->url);
                        if (!$this->canDeleteAny) {
                            return inertia('403');
                        }

                        $getOld = $record->permissions;
                        foreach ($getOld as $oldPer) {
                            $record->revokePermissionTo($oldPer->name, $record->guard_name);
                        }
                        $record->delete();
                    }
                }
            }

            session(["message" => "Role Bulk Action Success"]);
            return back();
        }
    }
}
