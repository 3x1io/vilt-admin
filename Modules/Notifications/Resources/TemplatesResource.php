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
            Row::make('name')->label(__('Name'))->validation("required|string|max:255")->get(),
            Row::make('key')->label(__('Key'))->validation("required|string")->unique(true)->list(false)->get(),
            Row::make('title')->label(__('Title'))->validation("required|string")->list(false)->type('trans')->get(),
            Row::make('body')->label(__('Body'))->validation("required|string")->list(false)->type('trans')->get(),
            Row::make('url')->label(__('Url'))->validation("nullable|string")->url(true)->get(),
            Row::make('icon')->label(__('Icon'))->validation("nullable|string")->list(false)->get(),
            Row::make('type')->label(__('Type'))->validation("required|array")->list(false)->type('select-value')->options(config('notifications.types'))->track_by_name('name')->track_by_id('id')->get(),
            Row::make('action')->label(__('Action By'))->validation("required|array")->list(false)->type('select-value')->options([
                [
                    "name" => __('System'),
                    "id" => "system"
                ],
                [
                    "name" => __('Manual'),
                    "id" => "manual"
                ]
            ])->track_by_name('name')->track_by_id('id')->get(),
            Row::make('providers')->label(__('Providers'))->validation("required|array")->list(false)->type('select-value')->multi(true)->options([
                [
                    "name" => __('Email'),
                    "id" => "email"
                ],
                [
                    "name" => __('FCM Web'),
                    "id" => "fcm-web"
                ],
                [
                    "name" => __('FCM Mobile'),
                    "id" => "fcm-api"
                ],
                [
                    "name" => __('SMS'),
                    "id" => "sms"
                ]
            ])->track_by_name('name')->track_by_id('id')->get(),
            Row::make('roles')->label(__('Roles'))->validation("nullable|array")->list(false)->type('relation')->multi(true)->options(Role::all()->toArray())->get(),
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
        $roles = [];

        if ($request->has('roles')) {
            foreach ($request->get('roles') as $role) {
                array_push($roles, $role['id']);
            }
        }

        $record->roles()->sync($roles);
    }
}
