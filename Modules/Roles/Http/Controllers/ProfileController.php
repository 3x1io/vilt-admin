<?php

namespace Modules\Roles\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Accounts\Entities\Account;

class ProfileController extends Controller
{
    public  function user(Request $request){
        $user = $request->user();
        return response()->json([
            "success" => true,
            "message" => __('User Loaded Success'),
            "data" => [
                "name" => $user->name,
                "phone" => $user->phone,
                "address" => $user->address,
                "email" => $user->email,
                "account_type" => $user->account_type,
                "plan_id" => $user->plan_id,
                "parent_id" => $user->parent_id,
                "title" => $user->title,
                "agency_name" => $user->agency_name,
                "is_active" => $user->is_active,
                "is_blocked" => $user->is_blocked,
            ]
        ]);
    }

    public  function update(Request $request){
        $request->validate([
            "name" => "sometimes|string|max:255",
            "phone" => "sometimes|string|max:255|unique:accounts,phone,".$request->user()->id,
            "address" => "sometimes|string",
            "email" => "sometimes|string|email",
            "title" => "sometimes|string|max:255",
            "agency_name" => "nullable|string|max:255",
        ]);

        $account = Account::find($request->user()->id);
        if($account){
            $account->name = $request->name;
            $account->phone = $request->phone;
            $account->address = $request->address;
            $account->email = $request->email;
            $account->title = $request->title;
            $account->agency_name = $request->agency_name;
            $account->save();

            return response()->json([
                "success" => true,
                "message" => __('User Updated Success'),
                "data" => []
            ]);
        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('User Not Found'),
                "data" => []
            ], 404);
        }
    }

    public  function  password(Request $request){
        $request->validate([
            "old_password" => "required|string|min:6",
            "password" => "required|string|min:6|confirmed",
        ]);

        $user = $request->user();

        if(\Hash::check($request->old_password, $user->password)){
            $user->password = \Hash::make($request->get('password'));
            $user->save();

            return response()->json([
                "success" => true,
                "message" => __('Password Updated Success'),
                "data" => []
            ]);
        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('Old Password Not Match'),
                "data" => []
            ], 404);
        }
    }
}
