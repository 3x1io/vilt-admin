<?php

namespace Modules\Notifications\Resources;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Cookie;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Notifications\Helpers\SendNotification;
use Modules\Notifications\Entities\UserNotification;
use Modules\Notifications\Entities\NotifiactionsTemplates;

class TemplatesResource extends Resource
{
    public $model = NotifiactionsTemplates::class;
    public $icon = "bx bxs-notification";
    public $group = "Notifications";

    public function rows()
    {
        return [
            Row::make('id')->label(__('Id'))->create(false)->edit(false)->get(),
            Row::make('image')->label(__('Image'))->preview(true)->type('image')->get(),
            Row::make('name')->label(__('Name'))->get(),
            Row::make('body')->label(__('Body'))->list(false)->type('trans')->get(),
            Row::make('key')->label(__('Key'))->list(false)->get(),
            Row::make('url')->label(__('Url'))->url(true)->get(),
            Row::make('title')->label(__('Title'))->list(false)->type('trans')->get(),
            Row::make('icon')->label(__('Icon'))->list(false)->get(),
            Row::make('type')->label(__('Type'))->list(false)->type('select-value')->options(config('notifications.types'))->track_by_name('name')->track_by_id('id')->get(),
            Row::make('roles')->label(__('Roles'))->list(false)->type('relation')->multi(true)->options(Role::all()->toArray())->get(),
        ];
    }

    public function afterStore(Request $request, $record)
    {
        if ($request->has('roles')) {
            foreach ($request->get('roles') as $role) {
                $record->roles()->attach($role['id']);
            }
        }
    }

    public function afterUpdate(Request $request, $record)
    {
        if ($request->has('roles')) {
            foreach ($request->get('roles') as $role) {
                $record->roles()->attach($role['id']);
            }
        }
    }
}
