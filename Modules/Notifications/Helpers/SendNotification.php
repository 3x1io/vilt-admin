<?php

namespace Modules\Notifications\Helpers;

use App\Models\User;
use App\Mail\EmailCode;
use App\Services\SapService;
use App\Models\CustomerNotification;
use App\Models\NotificationType;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Modules\Base\Helpers\Traits\Configure;
use Modules\Notifications\Jobs\NotificationJop;
use Modules\Notifications\Entities\UserNotification;
use Modules\Notifications\Entities\NotifiactionsTemplates;
use Modules\Notifications\Notifications\NotificationService;

class SendNotification
{
    use Configure;

    private ?string $title;
    private ?string $message = null;
    private ?string $type = 'success';
    private ?array $provider = ['fcm-web'];
    private ?string $privacy = 'public';
    private ?string $url = null;
    private ?string $image = null;
    private ?string $icon = null;
    private ?string $model = null;
    private ?string $template = null;
    private $template_find_title = null;
    private $template_title = null;
    private $template_find_body = null;
    private $template_body = null;
    private $template_model = null;
    private ?int $model_id = null;
    private ?int $created_by = null;
    private ?bool $database = false;
    private ?object $user = null;
    private ?string $lang = "ar";

    public function __construct($title)
    {
        $this->title = $title;
    }

    public function send()
    {

        if ($this->privacy === 'public') {
            $users = $this->model::all();
            foreach ($users as $user) {
                $this->user = $user;
                if ($user->lang) {
                    app()->setLocale($user->lang);
                } else {
                    app()->setLocale($this->lang);
                }

                $this->model_id = $user->id;
                if (!empty($this->template)) {
                    $loadTemplate = $this->loadTemplate();
                    if ($loadTemplate) {
                        if ($this->database) {
                            $this->sendToDatabase();
                        }
                        $this->sendToJob();
                    }
                } else {
                    if ($this->database) {
                        $this->sendToDatabase();
                    }
                    $this->sendToJob();
                }
            }
        } else if ($this->privacy === 'private') {
            $this->user =  $this->model::find($this->model_id);
            if ($this->user) {
                if ($this->user->lang) {
                    app()->setLocale($this->user->lang);
                } else {
                    app()->setLocale($this->lang);
                }
                if (!empty($this->template)) {
                    $loadTemplate = $this->loadTemplate();
                    if ($loadTemplate) {
                        if ($this->database) {
                            $this->sendToDatabase();
                        }
                        $this->sendToJob();
                    }
                } else {
                    if ($this->database) {
                        $this->sendToDatabase();
                    }
                    $this->sendToJob();
                }
            }
        }
    }

    public static function make(string $title)
    {
        $static = app(static::class, ['title' => $title]);
        $static->setUp();

        return $static;
    }

    public function sendToDatabase()
    {
        $notification = new UserNotification();
        $notification->title = $this->title;
        $notification->description = $this->message;
        $notification->icon = $this->icon;
        $notification->type = $this->type;
        $notification->url = $this->url;
        if ($this->template) {
            $notification->template_id = $this->template_model->id;
        }
        $notification->model_type = $this->model;
        $notification->model_id = $this->model_id;
        $notification->privacy = $this->privacy;
        $notification->save();

        if ($this->model == "App\Models\Customer") {
            $notificationType = NotificationType::where('type', $this->type)->first();
            if ($notificationType) {
                $notificationCustomer = new CustomerNotification();
                $notificationCustomer->customer_id = $this->model_id;
                $notificationCustomer->type = $this->type;
                $notificationCustomer->title = $this->title;
                $notificationCustomer->description = $this->message;
                $notificationCustomer->read = false;
                $notificationCustomer->url = $this->url;
                $notificationCustomer->notification_type_id = $notificationType->id;
                $notificationCustomer->save();
            }
        }

        return true;
    }

    public function sendToJob()
    {
        foreach ($this->provider as $provider) {
            $arrgs = [
                "title" => $this->title,
                "message" => $this->message,
                "icon" => $this->icon,
                "image" => $this->image,
                "url" => $this->url,
                "type" => $this->type,
                "privacy" => $this->privacy,
                "provider" => $provider,
                "model" => $this->model,
                "model_id" => $this->user->id
            ];

            if (!empty($this->template)) {
                $collectRoles = [];
                foreach ($this->template_model->roles as $role) {
                    array_push($collectRoles, $role->id);
                }
                if (count($collectRoles)) {
                    if ($this->user->hasRole($collectRoles)) {
                        NotificationJop::dispatch($arrgs);
                    }
                } else {
                    NotificationJop::dispatch($arrgs);
                }
            } else {
                NotificationJop::dispatch($arrgs);
            }
        }
    }

    public function loadTemplate()
    {
        $this->template_model = NotifiactionsTemplates::where('key', $this->template)->first();
        $this->title = str_replace($this->template_find_title ?? '', $this->template_title ?? '', $this->template_model->title);
        $this->message = str_replace($this->template_find_body ?? '', $this->template_body ?? '', $this->template_model->body);
        $this->url = $this->template_model->url;
        $this->image = count($this->template_model->getMedia('image')) ? $this->template_model->getMedia('image')->first()->getUrl() : null;
        $this->icon = $this->template_model->icon;
        $this->type = $this->template_model->type;

        $collectRoles = [];
        foreach ($this->template_model->roles as $role) {
            array_push($collectRoles, $role->id);
        }
        if (count($collectRoles)) {
            if ($this->user->hasRole($collectRoles)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    public function database($database): ?static
    {
        $this->database = $database;
        return $this;
    }

    public function lang($lang): ?static
    {
        $this->lang = $lang;
        return $this;
    }

    public function template($template): ?static
    {
        $this->template = $template;
        return $this;
    }

    public function template_find_title($template_find_title): ?static
    {
        $this->template_find_title = $template_find_title;
        return $this;
    }

    public function template_find_body($template_find_body): ?static
    {
        $this->template_find_body = $template_find_body;
        return $this;
    }

    public function template_title($template_title): ?static
    {
        $this->template_title = $template_title;
        return $this;
    }

    public function template_body($template_body): ?static
    {
        $this->template_body = $template_body;
        return $this;
    }

    public function message($message): ?static
    {
        $this->message = $message;
        return $this;
    }

    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    public function provider($provider): ?static
    {
        $this->provider = $provider;
        return $this;
    }

    public function privacy($privacy): ?static
    {
        $this->privacy = $privacy;
        return $this;
    }

    public function url($url): ?static
    {
        $this->url = $url;
        return $this;
    }

    public function image($image): ?static
    {
        $this->image = $image;
        return $this;
    }

    public function icon($icon): ?static
    {
        $this->icon = $icon;
        return $this;
    }

    public function model($model): ?static
    {
        $this->model = $model;
        return $this;
    }

    public function model_id($model_id): ?static
    {
        $this->model_id = $model_id;
        return $this;
    }

    public function created_by($created_by): ?static
    {
        $this->created_by = $created_by;
        return $this;
    }

    public static function sendNotificationUseFCMProvider($title, $message, $model, $type = "download-ready")
    {
        static::make($title)
            ->database(true)
            ->template_id(null)
            ->message($message)
            ->model(get_class($model))
            ->model_id($model->id)
            ->privacy('private')
            ->provider(["fcm-api"])
            ->type($type)
            ->send();
    }

    public static function sendNotificationUseFCMWebProvider($title, $message, $model, $type = "download-ready")
    {
        static::make($title)
            ->database(true)
            ->template_id(null)
            ->message($message)
            ->model(get_class($model))
            ->model_id($model->id)
            ->privacy('private')
            ->provider(["fcm-web"])
            ->type($type)
            ->send();
    }
}
