<?php

namespace Modules\Roles\Resources;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Route;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Core;
use Modules\Base\Helpers\Resources\Menu;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Modal;
use Modules\Base\Helpers\Resources\Action;
use Modules\Base\Helpers\Resources\Router;
use Modules\Base\Helpers\Resources\AddRoute;
use Modules\Base\Helpers\Resources\Resource;

class UserResource extends Resource
{
    public $model = User::class;
    public $icon = "bx bxs-user";
    public $group = "ALC";

    public function rows()
    {
        return [
            Row::make('id')->label(__('ID'))->edit(false)->create(false)->get(),
            Row::make('name')->label(__('Name'))
                ->search(true)
                ->validation('required|string|max:199')
                ->get(),
            Row::make('email')
                ->label(__('Email'))
                ->search(true)
                ->validation('required|string|email|max:199')
                ->type('email')
                ->get(),
            Row::make('password')->label(__('Password'))->validation('required|string|confirmed|min:6')->type('password')->list(false)->view(false)->get(),
            Row::make('password_confirmation')->validation('required|string|min:6')->label(__('Password Confirmation'))->type('password')->list(false)->view(false)->get(),
            Row::make('roles')->label(__('Roles'))->validation('array')->type('relation')->options(Role::all()->toArray())->multi(true)->sorting(false)->get(),
        ];
    }


    public function menus()
    {
        return [
            'ALC' => Menu::make('Users')->lang('users.sidebar')->icon('bx bxs-user')->route('users.index')->can('view_any_users')
        ];
    }

    public function beforeStore(Request $request)
    {
        $request['password'] = bcrypt($request['password']);

        return $request->all();
    }

    public function afterStore(Request $request, $record)
    {
        if ($request->has('roles')) {
            foreach ($request->get('roles') as $role) {
                $record->assignRole($role['name']);
            }
        }
    }

    public function beforeUpdate(Request $request, $record)
    {
        $request['password'] = bcrypt($request['password']);

        return $request->all();
    }

    public function afterUpdate(Request $request, $record)
    {
        if ($request->has('roles')) {
            foreach ($request->get('roles') as $role) {
                $record->assignRole($role['name']);
            }
        }
    }
}
