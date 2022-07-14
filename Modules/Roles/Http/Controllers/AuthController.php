<?php

namespace Modules\Roles\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|email|string",
            "password" => "required|min:6|string"
        ]);

        $check = auth('web')->attempt([
            "email" => $request->get('email'),
            "password" => $request->get('password'),
        ]);

        if ($check) {
            return response()->json([
                "success" => true,
                "message" => __('Login Success'),
                "data" => [
                    "token" => auth('web')->user()->createToken('auth')->plainTextToken
                ]
            ]);
        } else {
            return response()->json([
                "success" => false,
                "message" => __('Sorry Email Or Password Not Correct')
            ]);
        }
    }
}
