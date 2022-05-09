<?php

namespace io3x1\ViltRoles\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use App\Helpers\Vilt\Handler;
use App\Helpers\Vilt\AdminListing;
use App\Http\Controllers\Controller;
use io3x1\ViltRoles\Models\User;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    use Handler;

    public function schema()
    {
        return [
            Row::make('id')->label('ID')->edit(false)->create(false)->get(),
            Row::make('name')->label('Name')->get(),
            Row::make('email')->label('Email')->type('email')->get(),
            Row::make('password')->label('Password')->type('password')->list(false)->view(false)->get(),
            Row::make('password_confirmation')->label('Password Confirmation')->type('password')->list(false)->view(false)->get(),
            Row::make('roles')->label('Roles')->type('relation')->options(Role::all()->toArray())->multi(true)->sorting(false)->get(),
        ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return  \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // create and AdminListing instance for a specific model and
        $data = AdminListing::create(User::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['id'],

            );

        $rows = $this->schema();
        $this->loadMedia($data);
        $this->loadFilters($request);
        foreach ($data as $item) {
            $item->load('roles');
        }

        if ($request->ajax()) {
            return inertia('User/List', [
                "success" => true,
                "message" => "User Created Success",
                "collection" => $data,
                "rows" => $rows,
                "url" => "users",
                "search" => $this->search,
                "per_page" => $this->per_page,
                "orderBy" => $this->orderBy,
                "desc" => $this->desc,
                "filters" => $this->filters,
                "create" => $this->create,
            ]);
        } else {
            return Inertia::render('User/List', [
                "collection" => $data,
                "rows" => $rows,
                "url" => "users",
                "search" => $this->search,
                "per_page" => $this->per_page,
                "orderBy" => $this->orderBy,
                "desc" => $this->desc,
                "filters" => $this->filters,
                "create" => $this->create,
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param    \Illuminate\Http\Request  $request
     * @return  \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            "name" => "required|string",
            "email" => "required|string|email",
            "password" => "required|min:8|confirmed",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $record = User::create($request->all());

            $this->processCreateMedia($request, $record);

            if ($request->has('roles')) {
                foreach ($request->get('roles') as $role) {
                    $record->assignRole($role['name']);
                }
            }

            $data = User::paginate(10);

            return inertia('User/List', [
                "success" => true,
                "message" => "User Created Success",
                "collection" => $data,
                "rows" => $this->schema(),
                "url" => "users",
            ]);
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
        $record = User::find($id);

        $rules = [
            "name" => "sometimes|string",
            "password" => "sometimes|min:8|confirmed",
            "email" => "sometimes|string|email",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $request->password = bcrypt($request->get('password'));
            $record->update($request->all());

            $data = User::paginate(10);

            $this->processUpdateMedia($request, $record);

            foreach ($record->roles as $roleItem) {
                $record->removeRole($roleItem->name);
            }
            if ($request->has('roles')) {
                foreach ($request->get('roles') as $role) {
                    $record->assignRole($role['name']);
                }
            }

            return inertia('User/List', [
                "success" => true,
                "message" => "User Updated Success",
                "collection" => $data,
                "rows" => $this->schema(),
                "url" => "users",
            ]);
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
        $checkCount = User::all()->count();
        if ($checkCount > 1) {
            $record = User::find($id);
            if ($record) {
                foreach ($record->roles as $roleItem) {
                    $record->removeRole($roleItem->name);
                }
                $record->delete();

                $data = User::paginate(10);

                return inertia('User/List', [
                    "success" => true,
                    "message" => "User Deleted Success",
                    "collection" => $data,
                    "rows" => $this->schema(),
                    "url" => "users",
                ]);
            }
        } else {

            $data = User::paginate(10);

            return inertia('User/List', [
                "success" => true,
                "message" => "It's the last user you can't delete it!",
                "collection" => $data,
                "rows" => $this->schema(),
                "url" => "users",
            ]);
        }
    }

    public function bulkSelect()
    {
        $select = User::all()->lists('id')->toArray();

        $data = User::paginate(10);

        return inertia('User/List', [
            "success" => true,
            "message" => "User Deleted Success",
            "collection" => $data,
            "select" => $select,
            "rows" => $this->schema(),
            "url" => "users",
        ]);
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
                $record = User::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $checkCount = User::all()->count();
                        if ($checkCount > 1) {
                            foreach ($record->roles as $roleItem) {
                                $record->removeRole($roleItem->name);
                            }
                            $record->delete();
                        }
                    }
                }
            }
            $data = User::paginate(10);

            return inertia('User/List', [
                "success" => true,
                "message" => "User Bulk Action Success",
                "collection" => $data,
                "rows" => $this->schema(),
                "url" => "users",
            ]);
        }
    }
}
