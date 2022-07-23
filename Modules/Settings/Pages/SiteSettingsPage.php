<?php

namespace Modules\Settings\Pages;

use Illuminate\Support\Str;
use Modules\Base\Helpers\Resources\Action;
use Modules\Base\Helpers\Resources\Menu;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Setting;
use Modules\Settings\Settings\SitesSettings;

class SiteSettingsPage extends Setting {

    public ?string $setting = SitesSettings::class;
    public ?bool $api = true;
    public ?string $path = "site_settings";
    public ?string $group = "Settings";
    public ?string $icon = "bx bxs-cog";

    public  function rows(){
        return [
            Row::make('site_name')->label(__('Site Name'))->type('text')->get(),
            Row::make('site_description')->label(__('Site Description'))->type('text')->get(),
            Row::make('site_keywords')->label(__('Site Keywords'))->type('text')->get(),
            Row::make('site_profile')->preview(true)->label(_('Site Profile'))->type('image')->get(),
            Row::make('site_logo')->preview(true)->label(__('Site Logo'))->type('image')->get(),
            Row::make('site_author')->label(__('Site Author'))->type('text')->get(),
            Row::make('site_address')->label(__('Site Address'))->type('textarea')->get(),
            Row::make('site_email')->label(__('Site Email'))->type('email')->get(),
            Row::make('site_phone')->label(__('Site Phone'))->type('tel')->get(),
            Row::make('site_phone_code')->label(_('Site Phone Code'))->type('text')->get(),
            Row::make('site_location')->label(__('Site Location'))->type('text')->get(),
            Row::make('site_currency')->label(__('Site Currency'))->type('text')->get(),
            Row::make('site_language')->label(__('Site Language'))->type('text')->get(),
            Row::make('site_social')->label(__('Site Social'))->type('repeater')->options([
                Row::make('vendor')->label(__('Vendor'))->type('text')->get(),
                Row::make('url')->label(__('URL'))->type('text')->get(),
            ])->get(),
            Row::make('site_menu')->label(__('Site Menu'))->type('repeater')->options([
                Row::make('title')->label(__('Title'))->type('text')->get(),
                Row::make('icon')->label(__('Icon'))->type('text')->get(),
                Row::make('target')->label(__('Target'))->type('switch')->get(),
                Row::make('url')->label(__('URL'))->type('text')->get(),
                Row::make('route')->label(__('Route'))->type('text')->get(),
            ])->get(),
        ];
    }


}
