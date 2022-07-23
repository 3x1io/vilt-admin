<?php

namespace Modules\Settings\Pages;

use Illuminate\Support\Str;
use Modules\Base\Helpers\Resources\Menu;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Setting;
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


}
