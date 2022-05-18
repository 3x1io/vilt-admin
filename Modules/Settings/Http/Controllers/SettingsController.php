<?php

namespace Modules\Settings\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Spatie\Sitemap\SitemapGenerator;
use Illuminate\Contracts\Support\Renderable;

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
        return Inertia::render('Settings/Settings');
    }
}
