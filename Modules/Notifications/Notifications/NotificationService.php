<?php

namespace Modules\Notifications\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\File;
use NotificationChannels\Fcm\FcmChannel;
use NotificationChannels\Fcm\FcmMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use NotificationChannels\Fcm\Resources\ApnsConfig;
use NotificationChannels\Fcm\Resources\AndroidConfig;
use NotificationChannels\Fcm\Resources\ApnsFcmOptions;
use NotificationChannels\Fcm\Resources\AndroidFcmOptions;
use NotificationChannels\Fcm\Resources\WebpushFcmOptions;
use NotificationChannels\Fcm\Resources\AndroidNotification;
use NotificationChannels\PusherPushNotifications\PusherChannel;
use NotificationChannels\PusherPushNotifications\PusherMessage;

class NotificationService extends Notification
{
    public $title;
    public $message;
    public $icon;
    public $url;
    public $image;
    public $type;
    public $privacy;
    public $model;
    public $model_id;
    public $provider;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($title, $message, $icon, $image, $url, $type, $privacy, $provider = "fcm-api", $model = null, $model_id = null)
    {
        $this->title = $title;
        $this->message  = $message;
        $this->icon  = $icon;
        $this->url  = $url;
        $this->image  = $image;
        $this->type  = $type;
        $this->privacy  = $privacy;
        $this->model  = $model;
        $this->model_id  = $model_id;
        $this->provider  = $provider;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        if ($this->provider === 'email') {
            return ['mail'];
        } else if ($this->provider === 'fcm-api' || $this->provider === 'fcm-web') {
            return [FcmChannel::class];
        } else if ($this->provider === 'pusher') {
            return [PusherChannel::class];
        }
    }

    public function toFcm($notifiable)
    {
        return FcmMessage::create()
            ->setData([
                'title' => $this->title,
                'message' => $this->message,
                'icon' => $this->icon,
                'url' => $this->url,
                'image' => $this->image,
                'type' => $this->type,
                'privacy' => $this->privacy,
                'model' => (string)$this->model,
                'model_id' => (string)$this->model_id,
            ])
            ->setNotification(\NotificationChannels\Fcm\Resources\Notification::create()
                ->setTitle($this->title)
                ->setBody($this->message)
                ->setImage($this->image))
            ->setWebpush(
                \NotificationChannels\Fcm\Resources\WebpushConfig::create()
                    ->setFcmOptions(WebpushFcmOptions::create()->setAnalyticsLabel('analytics'))
            )
            ->setAndroid(
                AndroidConfig::create()
                    ->setFcmOptions(AndroidFcmOptions::create()->setAnalyticsLabel('analytics'))
                    ->setNotification(AndroidNotification::create()->setColor('#0A0A0A'))
            )->setApns(
                ApnsConfig::create()
                    ->setFcmOptions(ApnsFcmOptions::create()->setAnalyticsLabel('analytics_ios'))
            );
    }


    public function toPushNotification($notifiable)
    {
        return PusherMessage::create()
            ->web()
            ->title($this->title)
            ->link($this->url)
            ->body($this->message)
            ->setOption('icon', $this->icon)
            ->setOption('image', $this->image)
            ->setOption('type', $this->type)
            ->setOption('privacy', $this->privacy)
            ->setOption('model', $this->model)
            ->setOption('model_id', $this->model_id)
            ->withAndroid(
                PusherMessage::create()
                    ->IOS()
                    ->icon($this->icon)
                    ->badge(1)
                    ->title($this->title)
                    ->link($this->url)
                    ->body($this->message)
            )
            ->withiOS(
                PusherMessage::create()
                    ->android()
                    ->icon($this->icon)
                    ->badge(1)
                    ->title($this->title)
                    ->link($this->url)
                    ->body($this->message)
            );
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject($this->title)
            ->greeting($this->title)
            ->line($this->message)
            ->action('Open Link', $this->url)
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
