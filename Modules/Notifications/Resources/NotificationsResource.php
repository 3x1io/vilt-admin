<?php

namespace Modules\Notifications\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Query;
use Modules\Base\Helpers\Resources\Render;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Notifications\Helpers\SendNotification;
use Modules\Notifications\Entities\UserNotification;
use Modules\Notifications\Entities\NotifiactionsTemplates;

class NotificationsResource extends Resource
{
    public $model = UserNotification::class;
    public $icon = "bx bxs-bell";
    public $group = "Notifications";

    public function rows()
    {
        return [
            Row::make('id')->label(__('ID'))->create(false)->edit(false)->get(),
            Row::make('template_id')->label(__('Template'))->validation("required|array")->type('select-value')->options(NotifiactionsTemplates::where('action', 'manual')->get()->toArray())->track_by_name('name')->get(),
            Row::make('privacy')->label(__('Privacy'))->validation("required|string")->type('select')->options(["public", "private"])->get(),
            Row::make('model_type')->label(__('Type'))->validation("required|array")->view(false)->list(false)->type('hasOne')->options([
                [
                    "name"=> __('User'),
                    "id" => User::class
                ]
            ])->get(),
            Row::make('model_id')->label(__('User'))->validation("nullable|array")->reactive("private")->row('privacy')->type('hasOne')->model(User::class)->relation('model')->get(),
            Row::make('created_at')->label(__('Date'))->create(false)->edit(false)->type('datetime')->options([])->get()
        ];
    }

    public function afterLoad($data)
    {
        $getData = $data['data'];
        foreach ($getData as $i=>$item) {
            if ($item['model_id'] && $item['model_type']) {
                $getData[$i]['model_id'] = $item['model_type']['id']::find($item['model_id']['id']);
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

    public function beforeStore(Request $request)
    {
        $template = NotifiactionsTemplates::find($request->get('template_id'));

        $providers = [];
        foreach($template->providers as $provider) {
            $providers[] = $provider['id'];
        }

        SendNotification::make($template->title)
            ->template($template->key)
            ->database(false)
            ->privacy($request->get('privacy'))
            ->model($request->get('model_type'))
            ->model_id($request->get('model_id'))
            ->provider($providers)
            ->send();

        $gerRequest = $request->all();
        $gerRequest['title'] = $template->title;
        $gerRequest['body'] = $template->body;
        $gerRequest['privacy'] = $request->get('privacy');
        $gerRequest['model_type'] = $request->get('model_type');
        $gerRequest['model_id'] = $request->get('model_id');
        $gerRequest['icon'] = $template->icon;
        $gerRequest['url'] = $template->url;

        return $gerRequest;
    }
}
