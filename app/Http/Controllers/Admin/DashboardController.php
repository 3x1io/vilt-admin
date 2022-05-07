<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard');
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
