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

    public function select(Request $request){
        $request->validate([
           "model_type" => "required",
           "model_id" => "sometimes",
            "query" => "sometimes|boolean",
            "key" => "sometimes|string",
            "value" => "sometimes"
        ]);

        if($request->has('model_id')){
            $records = $request->get('model_type')::find($request->get('model_id'));
        }
        else if($request->has('query') && $request->has('query') == true){
            $records = $request->get('model_type')::where($request->get('key'), 'LIKE', '%' .$request->get('value').'%')->paginate(10);
        }
        else {
            $records = $request->get('model_type')::orderBy('id', 'desc')->paginate(10);
        }

        if($records){
            return response()->json([
                "success" => true,
                "message" => "Record loaded success",
                "data" => $records
            ]);
        }
        else {
            return response()->json([
                "success" => false,
                "message" => "Record not found"
            ], 404);
        }

    }
}
