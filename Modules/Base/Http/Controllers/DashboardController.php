<?php

namespace Modules\Base\Http\Controllers;

use Inertia\Inertia;
use App\Models\Driver;
use App\Models\Product;
use App\Models\Contract;
use App\Models\Customer;
use App\Models\Dispatch;
use App\Models\AdminRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Render;

class DashboardController extends Controller
{
    public function index()
    {
        return Render::make('dashboard/Index')->module('Base')->render();
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

    public function logout()
    {
        auth('web')->logout();
        return redirect()->route('login');
    }
}
