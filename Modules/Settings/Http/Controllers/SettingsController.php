<?php

namespace Modules\Settings\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Spatie\Sitemap\SitemapGenerator;
use Modules\Base\Helpers\Resources\Row;
use Illuminate\Support\Facades\Validator;
use Modules\Base\Helpers\Resources\Alert;
use Illuminate\Contracts\Support\Renderable;
use Modules\Base\Helpers\Resources\Render;
use Modules\Settings\Settings\SitesSettings;

class SettingsController extends Controller
{


    public function sitemap()
    {
        SitemapGenerator::create(config('app.url'))->writeToFile(public_path('sitemap.xml'));
        return Alert::make(__("Sitemap Generated Success"))->fire();
    }

    public function settings()
    {
        $settings = new SitesSettings();

        $form = [
            Row::make('site_name')->label(__('Site Name'))->default($settings->site_name)->type('text')->get(),
            Row::make('site_description')->label(__('Site Description'))->default($settings->site_description)->type('text')->get(),
            Row::make('site_keywords')->label(__('Site Keywords'))->default($settings->site_keywords)->type('text')->get(),
            Row::make('site_profile')->preview(true)->label(_('Site Profile'))->default(url($settings->site_profile))->type('image')->get(),
            Row::make('site_logo')->preview(true)->label(__('Site Logo'))->default(url($settings->site_logo))->type('image')->get(),
            Row::make('site_author')->label(__('Site Author'))->default($settings->site_author)->type('text')->get(),
            Row::make('site_address')->label(__('Site Address'))->default($settings->site_address)->type('textarea')->get(),
            Row::make('site_email')->label(__('Site Email'))->default($settings->site_email)->type('email')->get(),
            Row::make('site_phone')->label(__('Site Phone'))->default($settings->site_phone)->type('tel')->get(),
            Row::make('site_phone_code')->default($settings->site_phone_code)->label(_('Site Phone Code'))->type('text')->get(),
            Row::make('site_location')->default($settings->site_location)->label(__('Site Location'))->type('text')->get(),
            Row::make('site_currency')->default($settings->site_currency)->label(__('Site Currency'))->type('text')->get(),
            Row::make('site_language')->default($settings->site_language)->label(__('Site Language'))->type('text')->get(),
            Row::make('site_social')->default($settings->site_social)->label(__('Site Social'))->type('repeater')->options([
                Row::make('vendor')->label(__('Vendor'))->type('text')->get(),
                Row::make('url')->label(__('URL'))->type('text')->get(),
            ])->get(),
            Row::make('site_menu')->default($settings->site_menu)->label(__('Site Menu'))->type('repeater')->options([
                Row::make('title')->label(__('Title'))->type('text')->get(),
                Row::make('icon')->label(__('Icon'))->type('text')->get(),
                Row::make('target')->label(__('Target'))->type('switch')->get(),
                Row::make('url')->label(__('URL'))->type('text')->get(),
                Row::make('route')->label(__('Route'))->type('text')->get(),
            ])->get(),
        ];

        return Render::make('Settings')->module('Settings')->data([
            "rows" => $form
        ])->render();
    }

    public function settingsSave(Request $request)
    {
        $rules = [
            "site_name" => "required|string",
            "site_description" => "required|string",
            "site_keywords" => "required|string",
            "site_profile" => "required",
            "site_logo" => "required",
            "site_author" => "required|string",
            "site_address" => "required|string",
            "site_email" => "required|string",
            "site_phone" => "required|string",
            "site_phone_code" => "required|string",
            "site_location" => "required|string",
            "site_currency" => "required|string",
            "site_language" => "required|string",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $settings = new SitesSettings();
            $settings->site_name = $request->get('site_name');
            $settings->site_description = $request->get('site_description');
            $settings->site_keywords = $request->get('site_keywords');
            if ($request->hasFile('site_profile')) {
                $settings->site_profile = str_replace('public/', 'storage/', $request->file('site_profile')->store('public/settings'));
            }
            if ($request->hasFile('site_logo')) {
                $settings->site_logo = str_replace('public/', 'storage/', $request->file('site_logo')->store('public/settings'));
            }
            $settings->site_author = $request->get('site_author');
            $settings->site_address = $request->get('site_address');
            $settings->site_email = $request->get('site_email');
            $settings->site_phone = $request->get('site_phone');
            $settings->site_phone_code = $request->get('site_phone_code');
            $settings->site_location = $request->get('site_location');
            $settings->site_currency = $request->get('site_currency');
            $settings->site_language = $request->get('site_language');
            $settings->sap_functionality = $request->get('sap_functionality');
            if ($request->has('site_social') && !empty($request->get('site_social'))) {
                $settings->site_social = $request->get('site_social');
            }

            if ($request->has('site_menu') && !empty($request->get('site_menu'))) {
                $settings->site_menu = $request->get('site_menu');
            }
            $settings->save();

            return Alert::make(__("Settings Updated Success!"))->fire();
        }
    }
}
