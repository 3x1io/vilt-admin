<?php

use App\Models\User;
use App\Models\NotificationType;
use Modules\Notifications\Entities\UserNotification;
use Modules\Notifications\Entities\NotifiactionsTemplates;
use Modules\Notifications\Notifications\NotificationService;

if (!function_exists('get_notifications')) {
    function get_notifications($max = 10, $model = null, $model_id = null)
    {
        if ($model) {
            $notification = UserNotification::where('model_type', $model)->where('model_id', $model_id)->orderBy('id', 'desc')->take($max)->get();
            foreach ($notification as $item) {
                $item->date = $item->created_at->diffForHumans();
                if ($item->template_id) {
                    $template = NotifiactionsTemplates::find($item->template_id);
                    $item->image = count($template->getMedia('image')) ? $template->getMedia('image')->first()->getUrl() : url('images/default.png');
                }
            }
            return $notification;
        } else {
            $notification = UserNotification::orderBy('id', 'desc')->take($max)->get();
            foreach ($notification as $item) {
                $item->date = $item->created_at->diffForHumans();
                if ($item->template_id) {
                    $template = NotifiactionsTemplates::find($item->template_id);
                    $item->image = count($template->getMedia('image')) ? $template->getMedia('image')->first()->getUrl() : url('images/default.png');
                }
            }
            return $notification;
        }
    }
}
