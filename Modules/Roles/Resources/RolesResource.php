<?php

namespace Modules\Roles\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Modules\Base\Helpers\Menu\Menu;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Core;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Modal;
use Modules\Base\Helpers\Resources\Action;
use Modules\Base\Helpers\Resources\Router;
use Modules\Base\Helpers\Resources\AddRoute;
use Modules\Base\Helpers\Resources\Resource;

class RolesResource extends Resource
{
    public $model = Role::class;
    public $icon = "bx bxs-lock-alt";
    public $group = "ALC";

    public function rows()
    {
        return [
            Row::make('id')->label(__('ID'))->edit(false)->create(false)->get(),
            Row::make('name')->label(__('Name'))->get(),
            Row::make('guard_name')->label(__('Guard Name'))->get(),
            Row::make('permissions')->label(__('Permissions'))->type('relation')->list(false)->options(Permission::all()->toArray())->multi(true)->get(),
        ];
    }

    public function actions()
    {
        return [
            Action::make('generate')->label(__('Generate Permissions'))->type('success')->modal('generate')->render(),
        ];
    }

    public function modals()
    {
        $tables = DB::connection()->getDoctrineSchemaManager()->listTableNames();

        return [
            Modal::make('generate')->title(__('Generate Permissions'))->type('success')
                ->rows([
                    Row::make('guard_name')->label(__('Guard Name'))->get(),
                    Row::make('tables')->label(__('Tables'))->multi(true)->type('select')->options($tables)->get(),
                ])
                ->buttons([
                    Action::make('generate')->label(__('Generate'))->action('roles.generate')->type('success')->render(),
                ])
                ->render(),
        ];
    }

    public function route()
    {
        return [
            AddRoute::make('generate')->method('generate')->path('generate')->controller(static::class)->get()
        ];
    }

    public function generate(Request $request)
    {

        $this->roles($this->url);
        if (!$this->canCreate) {
            return inertia('403');
        }

        $rules = [
            "tables" => "required|array",
            "guard_name" => "required|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            foreach ($request->get('tables') as $table) {
                $checkView = Permission::where('name', 'view_' . $table)->where('guard_name', $request->guard_name)->first();
                if (!$checkView) {
                    Permission::create(['name' => 'view_' . $table, 'guard_name' => $request->guard_name]);
                }
                $checkViewAny = Permission::where('name', 'view_any_' . $table)->where('guard_name', $request->guard_name)->first();
                if (!$checkViewAny) {
                    Permission::create(['name' => 'view_any_' . $table, 'guard_name' => $request->guard_name]);
                }
                $checkCreate = Permission::where('name', 'create_' . $table)->where('guard_name', $request->guard_name)->first();
                if (!$checkCreate) {
                    Permission::create(['name' => 'create_' . $table, 'guard_name' => $request->guard_name]);
                }
                $checkUpdate = Permission::where('name', 'update_' . $table)->where('guard_name', $request->guard_name)->first();
                if (!$checkUpdate) {
                    Permission::create(['name' => 'update_' . $table, 'guard_name' => $request->guard_name]);
                }
                $checkDelete = Permission::where('name', 'delete_' . $table)->where('guard_name', $request->guard_name)->first();
                if (!$checkDelete) {
                    Permission::create(['name' => 'delete_' . $table, 'guard_name' => $request->guard_name]);
                }
                $checkExport = Permission::where('name', 'export_' . $table)->where('guard_name', $request->guard_name)->first();
                if (!$checkExport) {
                    Permission::create(['name' => 'export_' . $table, 'guard_name' => $request->guard_name]);
                }
                $checkDeleteAny = Permission::where('name', 'delete_any_' . $table)->where('guard_name', $request->guard_name)->first();
                if (!$checkDeleteAny) {
                    Permission::create(['name' => 'delete_any_' . $table, 'guard_name' => $request->guard_name]);
                }
            }

            return Alert::make(__("Permission Generated Success"))->fire();
        }
    }

    public function afterStore(Request $request, $record)
    {
        if ($request->has('permissions')) {
            foreach ($request->get('permissions') as $permission) {
                $record->givePermissionTo($permission['name']);
            }
        }
    }

    public function afterUpdate(Request $request, $record)
    {
        if ($request->has('permissions')) {
            $getPermArray = [];
            foreach ($request->get('permissions') as $permission) {
                array_push($getPermArray, $permission['name']);
            }

            $record->syncPermissions($getPermArray);
        }
    }
}
