<?php

namespace Modules\Roles\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Accounts\Entities\Account;
use Modules\Accounts\Entities\AccountType;
use Modules\Payment\Entities\Plan;

class AuthController extends Controller
{
    public function register(Request $request){

        $account = Account::onlyTrashed()->where('phone',$request->get('phone'))->first();

        if($account){
            $account->restore();

            return response()->json([
                "success" => true,
                "message" => __('Your Account has been restored please login'),
            ], 401);
        }
        else {
            $roles = [
                "account_type" => "required|integer",
                "name" => "required|string|max:255",
                "phone" => "required|string|max:255|unique:accounts",
                "title" => "required|string|max:255",
                "password" => "required|string|min:6|confirmed",
            ];

            if($request->get('account_type') == 1){
                $roles["agency_name"] = "required|string|max:255";
            }
            $request->validate($roles);

            $type = AccountType::find($request->get('account_type'));

            if($type){
                $account = new Account();
                $account->account_type = $request->get('account_type');
                $account->name = $request->get('name');
                if($request->has('agency_name') && !empty($request->get('agency_name'))){
                    $account->agency_name = $request->get('agency_name');
                }
                $account->phone = $request->get('phone');
                $account->title = $request->get('title');
                $account->plan_id = $type->plan_id;
                $account->password = bcrypt($request->get('password'));
                if($request->get('account_type') === 1){
                    $account->agency_name = $request->get('agency_name');
                }
                $account->save();

                // FIXME: send sms to user with otp
                $account->otp_code = "111111";
                $account->save();

                return response()->json([
                    'success' => true,
                    'message' => __('Account created successfully, an OTP has been send to your phone'),
                    'data' => []
                ]);
            }
            else {
                return response()->json([
                    'success' => false,
                    'message' => __('Sorry Account type not found!'),
                    'data' => []
                ], 404);
            }
        }

    }

    public function login(Request $request)
    {
        $request->validate([
            "phone" => "required|string|max:11",
            "password" => "required|min:6|string"
        ]);

        $check = auth('account')->attempt([
            "phone" => $request->get('phone'),
            "password" => $request->get('password'),
        ]);

        if ($check) {
            if(auth('account')->user()->is_blocked){
                return response()->json([
                    "success" => false,
                    "message" => __('Sorry your account is blocked')
                ], 400);
            }
            else if(!auth('account')->user()->is_active){
                return response()->json([
                    "success" => false,
                    "message" => __('Sorry your account not active please active it first')
                ], 401);
            }
            else {
                $user = auth('account')->user();
                return response()->json([
                    "success" => true,
                    "message" => __('Login Success'),
                    "data" => [
                        "token" => auth('account')->user()->createToken('auth')->plainTextToken,
                        "user" => [
                            "id" => $user->id,
                            "profile_image" => null,
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
                    ]
                ]);
            }
        } else {
            return response()->json([
                "success" => false,
                "message" => __('Sorry Phone Or Password Not Correct')
            ], 403);
        }
    }

    public  function  reset(Request $request){
        $request->validate([
            "phone" => "required|string|max:11",
        ]);

        $exists = Account::where('phone', $request->get('phone'))->first();

        if ($exists) {
            // FIXME: send sms to user phone
            $exists->otp_code = "111111";
            $exists->save();

            return response()->json([
                "success" => true,
                "message" => __('An OTP has been sent to your phone'),
                "data" => []
            ]);
        } else {
            return response()->json([
                "success" => false,
                "message" => __('Sorry Account Not Found!'),
                "data" => []
            ], 404);
        }
    }

    public  function  password(Request $request){
        $request->validate([
            "phone" => "required|string|max:11",
            "otp_code" => "required|string|max:6",
            "password" => "required|min:6|string|confirmed"
        ]);

        $exists = Account::where('phone', $request->get('phone'))->first();

        if ($exists) {
            if ($exists->otp_code == $request->get('otp_code')) {
                $exists->otp_code = null;
                $exists->password = bcrypt($request->get('password'));
                $exists->save();

                return response()->json([
                    "success" => true,
                    "message" => __('Password Changed Successfully'),
                    "data" => []
                ]);
            } else {
                return response()->json([
                    "success" => false,
                    "message" => __('Sorry OTP Code Not Correct'),
                    "data" => []
                ], 404);
            }
        } else {
            return response()->json([
                "success" => false,
                "message" => __('Sorry Account Not Found!'),
                "data" => []
            ], 404);
        }
    }

    public function otp(Request $request){
        $request->validate([
            "phone" => "required|string|max:11",
            "otp_code" => "required|string|max:6"
        ]);

        $exists = Account::where('phone', $request->get('phone'))->first();

        if ($exists) {
            if ($exists->otp_code == $request->get('otp_code')) {
                return response()->json([
                    "success" => true,
                    "message" => __('Your OTP is Active'),
                    "data" => []
                ]);
            }
            else {
                return response()->json([
                    "success" => false,
                    "message" => __('Sorry OTP Code Not Correct'),
                    "data" => []
                ], 404);
            }
        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('Sorry Account Not Found!'),
                "data" => []
            ], 404);
        }


    }

    public  function active(Request $request){
        $request->validate([
            "phone" => "required|string|max:11",
            "otp_code" => "required|string|max:6"
        ]);

        $exists = Account::where('phone', $request->get('phone'))->first();

        if ($exists) {
            if ($exists->otp_code == $request->get('otp_code')) {
                $exists->otp_code = null;
                $exists->is_active = true;
                $exists->save();

                return response()->json([
                    "success" => true,
                    "message" => __('Account Activated Successfully'),
                    "data" => []
                ]);
            } else {
                return response()->json([
                    "success" => false,
                    "message" => __('Sorry OTP Code Not Correct'),
                    "data" => []
                ], 404);
            }
        } else {
            return response()->json([
                "success" => false,
                "message" => __('Sorry Account Not Found!'),
                "data" => []
            ], 404);
        }
    }

    public  function resend(Request $request){
        $request->validate([
            "phone" => "required|string|max:11",
        ]);

        $exists = Account::where('phone', $request->get('phone'))->first();

        if($exists){
            // FIXME: send sms to user phone

            $exists->otp_code = "111111";
            $exists->save();

            return response()->json([
                "success" => true,
                "message" => __('An OTP has been sent to your phone'),
                "data" => []
            ]);
        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('Sorry Account Not Found!'),
                "data" => []
            ], 404);
        }
    }
}
