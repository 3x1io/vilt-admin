<?php

namespace io3x1\ViltRoles\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use App\Helpers\Vilt\Handler;
use App\Helpers\Vilt\AdminListing;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    use Handler;

    public $url = "users";

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
        $this->roles($this->url);
        if (!$this->canView) {
            return inertia('403');
        }
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

        $this->loadMedia($data);
        $this->loadFilters($request);
        foreach ($data as $item) {
            $item->load('roles');
        }

        return inertia('User/List', $this->response($data, $this->url));
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


            session(["message" => "User Created Success"]);
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

            $this->processUpdateMedia($request, $record);


            if ($request->has('roles')) {
                $roles = [];
                foreach ($request->get('roles') as $role) {
                    array_push($roles, $role['name']);
                }

                $record->syncRoles($roles);
            }

            session(["message" => "User Updated Success"]);
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

        $checkCount = User::all()->count();
        if ($checkCount > 1) {
            $record = User::find($id);
            if ($record) {
                foreach ($record->roles as $roleItem) {
                    $record->removeRole($roleItem->name);
                }
                $record->delete();

                session(["message" => "User Deleted Success"]);
                return back();
            }
        } else {
            session(["message" => "It's the last user you can't delete it!"]);
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
                $record = User::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $this->roles($this->url);
                        if (!$this->canDeleteAny) {
                            return inertia('403');
                        }

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

            session(["message" => "User Bulk Action Success"]);
            return back();
        }
    }
}
