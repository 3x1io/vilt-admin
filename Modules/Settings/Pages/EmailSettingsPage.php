<?php

namespace Modules\Settings\Pages;

use App\Models\User;
use Illuminate\Support\Str;
use Modules\Base\Helpers\Resources\Action;
use Modules\Base\Helpers\Resources\AddRoute;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Menu;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Setting;
use Modules\Notifications\Helpers\SendNotification;
use Modules\Settings\Settings\EmailSettings;
use Modules\Settings\Settings\SitesSettings;

class EmailSettingsPage extends Setting {

    public ?string $setting = EmailSettings::class;
    public ?bool $api = true;
    public ?string $path = "email_settings";
    public ?string $group = "Settings";
    public ?string $icon = "bx bxs-envelope";

    public  function rows(){
        return [
            Row::make('mail_mailer')->label(__('Email Mailer'))->type('text')->get(),
            Row::make('mail_host')->label(__('Email Host'))->type('text')->get(),
            Row::make('mail_port')->label(__('Email Port'))->type('text')->get(),
            Row::make('mail_username')->label(__('Email Username'))->type('text')->get(),
            Row::make('mail_password')->label(__('Email Password'))->type('text')->get(),
            Row::make('mail_encryption')->label(__('Email Encryption'))->type('text')->get(),
            Row::make('mail_from_address')->label(__('Email From Address'))->type('text')->get(),
            Row::make('mail_from_name')->label(__('Email From Name'))->type('text')->get(),
        ];
    }

    public function actions()
    {
        return [
            Action::make('test_email')->label(__('Test Email'))->icon('bx bx-send')->type('success')->action('admin.settings.email_settings.test_email')->render(),
        ];
    }

    public function route(){
        return [
            AddRoute::make('test_email')->path('test_email')->method('sendEmail')->type('post')->controller(static::class)->get()
        ];
    }

    public function sendEmail(){

        $user = User::first();
        SendNotification::make("Test Email Send Form Server " . url('/'))
            ->message("test email to test current email settings")
            ->provider(['email'])
            ->privacy('private')
            ->model(User::class)
            ->model_id($user->id)
            ->send();

        return Alert::make(__('Test Email Sent'))->type('success')->fire();
    }


}
