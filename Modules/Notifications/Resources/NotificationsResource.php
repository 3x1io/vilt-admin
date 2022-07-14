<?php

namespace Modules\Notifications\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Notifications\Helpers\SendNotification;
use Modules\Notifications\Entities\UserNotification;
use Modules\Notifications\Entities\NotifiactionsTemplates;

class NotificationsResource extends Resource
{
    public $model = UserNotification::class;
    public $icon = "bx bx-menu";
    public $group = "Settings";

    public function rows()
    {
        return [
            Row::make('id')->label(__('ID'))->create(false)->edit(false)->get(),
            Row::make('template_id')->label(__('Template'))->type('hasOne')->options(NotifiactionsTemplates::all()->toArray())->track_by_name('name')->get(),
            Row::make('privacy')->label(__('Privacy'))->create(false)->edit(false)->type('select')->options(["public", "private"])->get(),
            Row::make('model_id')->label(__('User'))->create(false)->edit(false)->type('hasOne')->options([])->get(),
            Row::make('model_type')->label(__('User'))->view(false)->list(false)->create(false)->edit(false)->type('hasOne')->options([])->get(),
            Row::make('created_at')->label(__('Date'))->create(false)->edit(false)->type('datetime')->options([])->get()
        ];
    }

    public function afterLoad($data)
    {
        foreach ($data['data'] as $item) {
            if ($item['model_id'] && $item['model_type']) {
                $item['model_id'] = $item['model_type']::find($item['model_id']);
            } else {
                $item['model_id'] = "";
            }
            $item['template_id'] = NotifiactionsTemplates::find($item['template_id']);
        }

        return $data;
    }

    public function beforeStore(Request $request)
    {
        $local = Cookie::get('lang');
        if (empty($local)) {
            $local = "en";
        }
        $getRequest = $request->all();
        $getRequest['model_type'] = $getRequest['model_type']['id'];
        if ($getRequest['model_id']) {
            $getRequest['model_id'] = $getRequest['model_id']['id'];
        } else {
            $getRequest['model_id'] = null;
        }

        SendNotification::make($getRequest['template_id']['title'][$local])
            ->template($getRequest['template_id']['key'])
            ->database(true)
            ->privacy($getRequest['privacy'])
            ->model($getRequest['model_type'])
            ->model_id($getRequest['model_id'])
            ->provider([$request->get('provider')])
            ->lang($local)
            ->send();

        return Alert::make(__());
    }
}
