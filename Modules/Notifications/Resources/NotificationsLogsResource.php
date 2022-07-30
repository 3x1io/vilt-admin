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

            Row::make('model_id')->type('select-value')->options([])->label(__('User'))->get(),

            Row::make('title')->label(__('Title '))->get(),

            Row::make('description')->list(false)->label(__('Description '))->get(),

            Row::make('type')->list(false)->label(__('Type '))->get(),
            Row::make('provider')->label(__('Provider'))->get(),
            Row::make('created_at')->label(__('Date'))->type('datetime')->get(),
        ];
    }

    public function afterLoad($data)
    {
        $getData = $data['data'];
        foreach ($getData as $i=>$item) {
            if ($item['model_id'] && $item['model_type']) {
                $getData[$i]['model_id'] = $item['model_type']::find($item['model_id']);
            } else {
                $getData[$i]['model_id'] = [
                    "name" => __('Public'),
                    "id" => "public"
                ];
            }
        }

        $data['data'] = $getData;
        return $data;
    }

}
