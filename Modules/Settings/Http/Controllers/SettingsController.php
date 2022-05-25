<?php

namespace Modules\Settings\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Base\Helpers\Vilt\Row;
use Spatie\Sitemap\SitemapGenerator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Support\Renderable;
use Modules\Settings\Settings\SitesSettings;

class SettingsController extends Controller
{


    public function sitemap()
    {
        SitemapGenerator::create(config('app.url'))->writeToFile(public_path('sitemap.xml'));

        session()->flash('notification', [
            'message' => __("Sitemap Generated Success"),
            'status' => "success",
        ]);
    }

    public function themes()
    {
        return Inertia::render('Settings/Themes');
    }

    public function plugins()
    {
        return Inertia::render('Settings/Plugins');
    }

    public function commands()
    {
        return Inertia::render('Settings/Commands');
    }

    public function translations()
    {
        return Inertia::render('Settings/Translations');
    }


    public function backup()
    {
        return Inertia::render('Settings/Backup');
    }

    public function acl()
    {
        return Inertia::render('Settings/ACL');
    }


    public function log()
    {
        return Inertia::render('Settings/Log');
    }

    public function settings()
    {
        $settings = new SitesSettings();

        $form = [
            Row::make('site_name')->label('Site Name')->default($settings->site_name)->type('text')->get(),
            Row::make('site_description')->label('Site Description')->default($settings->site_description)->type('text')->get(),
            Row::make('site_keywords')->label('Site Keywords')->default($settings->site_keywords)->type('text')->get(),
            Row::make('site_profile')->preview(true)->label('Site Profile')->default(url($settings->site_profile))->type('image')->get(),
            Row::make('site_logo')->preview(true)->label('Site Logo')->default(url($settings->site_logo))->type('image')->get(),
            Row::make('site_author')->label('Site Author')->default($settings->site_author)->type('text')->get(),
            Row::make('site_address')->label('Site Address')->default($settings->site_address)->type('textarea')->get(),
            Row::make('site_email')->label('Site Email')->default($settings->site_email)->type('email')->get(),
            Row::make('site_phone')->label('Site Phone')->default($settings->site_phone)->type('tel')->get(),
            Row::make('site_phone_code')->default($settings->site_phone_code)->label('Site Phone Code')->type('text')->get(),
            Row::make('site_location')->default($settings->site_location)->label('Site Location')->type('text')->get(),
            Row::make('site_currency')->default($settings->site_currency)->label('Site Currency')->type('text')->get(),
            Row::make('site_language')->default($settings->site_language)->label('Site Language')->type('text')->get(),
            Row::make('site_social')->default($settings->site_social)->label('Site Social')->type('repeater')->options([
                Row::make('vendor')->label('vendor')->type('text')->get(),
                Row::make('url')->label('url')->type('text')->get(),
            ])->get(),
            Row::make('site_menu')->default($settings->site_menu)->label('Site Menu')->type('repeater')->options([
                Row::make('title')->label('title')->type('text')->get(),
                Row::make('icon')->label('icon')->type('text')->get(),
                Row::make('target')->label('target')->type('switch')->get(),
                Row::make('url')->label('url')->type('text')->get(),
                Row::make('route')->label('route')->type('text')->get(),
            ])->get(),
        ];

        return Inertia::render('Settings/Settings', [
            "rows" => $form
        ]);
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
            if ($request->has('site_social') && !empty($request->get('site_social'))) {
                $settings->site_social = $request->get('site_social');
            }

            if ($request->has('site_menu') && !empty($request->get('site_menu'))) {
                $settings->site_menu = $request->get('site_menu');
            }
            $settings->save();

            session(["message" => "Settings Updated Success!"]);
            return back();
        }
    }
}
