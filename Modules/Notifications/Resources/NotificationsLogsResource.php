<?php

namespace Modules\Notifications\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Notifications\Entities\NotificationsLogs;
use Modules\Notifications\Helpers\SendNotification;
use Modules\Notifications\Entities\UserNotification;

class NotificationsLogsResource extends Resource
{
    public $model = NotificationsLogs::class;
    public $icon = "bx bx-history";
    public $group = "Notifications";

    public function rows()
    {
        $this->canCreate = false;
        $this->canEdit = false;
        return [
            Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

            Row::make('model_type')->list(false)->view(false)->label(__('Model Type '))->get(),

            Row::make('model_id')->type('hasOne')->options([])->label(__('User'))->get(),

            Row::make('title')->label(__('Title '))->get(),

            Row::make('description')->list(false)->label(__('Description '))->get(),

            Row::make('type')->list(false)->label(__('Type '))->get(),
            Row::make('provider')->label(__('Provider'))->get(),
            Row::make('created_at')->label(__('Date'))->type('datetime')->get(),
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
