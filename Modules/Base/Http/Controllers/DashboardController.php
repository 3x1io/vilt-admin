<?php

namespace Modules\Base\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Row;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard');
    }

    public function settings()
    {
        $form = [
            Row::make('site_name')->type('text')->get()
        ];
        return Inertia::render('Settings/Settings', [
            "form" => $form
        ]);
    }
}
