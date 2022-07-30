<?php

namespace Modules\Roles\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Accounts\Entities\Account;
use Modules\Accounts\Entities\AccountType;

class ProfileController extends Controller
{
    public  function user(Request $request){
        $user = $request->user();
        return response()->json([
            "success" => true,
            "message" => __('User Loaded Success'),
            "data" => [
                "id" => $user->id,
                "profile_image" => $user->getMedia('profile_image')->first() ? $user->getMedia('profile_image')->first()->getUrl() : null,
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
        ]);

        $account = Account::find($request->user()->id);
        if($account){
            if($request->has('name') && !empty($request->has('name'))){
                $account->name = $request->get('name');
            }
            if($request->has('phone') && !empty($request->has('phone'))){
                $account->phone = $request->get('phone');
            }
            if($request->has('address') && !empty($request->has('address'))){
                $account->address = $request->get('address');
            }
            if($request->has('email') && !empty($request->has('email'))){
                $account->email = $request->get('email');
            }
            if($request->has('title') && !empty($request->has('title'))){
                $account->title = $request->get('title');
            }
            if($request->has('agency_name')){
                $account->agency_name = $request->get('agency_name');
            }

            $account->save();

            if($request->hasFile('profile_image')){
                $account->addMedia($request->file('profile_image'))->toMediaCollection('profile_image');
            }

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
    public  function  destroy(Request $request){
        $user = $request->user();

        if($user){
            $user = Account::find($user->id)->delete();
            return response()->json([
                "success" => true,
                "message" => __('Your account has been deleted'),
                "data" => []
            ]);
        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('Your account not found!'),
                "data" => []
            ], 404);
        }
    }

    public function members(Request $request){
        $user = $request->user();
        $members = Account::where('parent_id', $user->id)->paginate(10);

        if(count($members)){
            return response()->json([
                "success" => true,
                "message" => __('Members Loaded Success'),
                "data" => $members
            ]);
        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('No Members Found'),
                "data" => []
            ], 404);
        }
    }
    public function showMember(Request  $request, $id){
        $account = Account::find($id);
        if($account){
            if($account->parent_id === $request->user()->id){
                return response()->json([
                    "success" => true,
                    "message" => __('Member Loaded Success'),
                    "data" => [
                        "id" => $account->id,
                        "profile_image" => $account->getMedia('profile_image')->first() ? $account->getMedia('profile_image')->first()->getUrl() : null,
                        "name" => $account->name,
                        "phone" => $account->phone,
                        "address" => $account->address,
                        "email" => $account->email,
                        "account_type" => $account->account_type,
                        "plan_id" => $account->plan_id,
                        "parent_id" => $account->parent_id,
                        "title" => $account->title,
                        "agency_name" => $account->agency_name,
                        "is_active" => $account->is_active,
                        "is_blocked" => $account->is_blocked,
                    ]
                ]);
            }
            else {
                return response()->json([
                    "success" => false,
                    "message" => __('This member is not your member'),
                    "data" => []
                ], 403);
            }

        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('Member Not Found'),
                "data" => []
            ], 404);
        }
    }
    public function updateMemberPassword(Request $request, $id){
        $account = Account::find($id);
        if($account){
            if($account->parent_id === $request->user()->id){
                $request->validate([
                    "password" => "required|string|min:6|confirmed",
                ]);

                $account->password = \Hash::make($request->get('password'));
                $account->save();

                return response()->json([
                    "success" => true,
                    "message" => __('Password Updated Success'),
                    "data" => []
                ]);
            }
            else {
                return response()->json([
                    "success" => false,
                    "message" => __('You are not authorized to change this member password'),
                    "data" => []
                ], 404);
            }

        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('Member Not Found'),
                "data" => []
            ], 404);
        }

    }
    public function storeMember(Request $request){

        if($request->user()->account_type === 1){
            $roles = [
                "name" => "required|string|max:255",
                "phone" => "required|string|max:255|unique:accounts",
                "title" => "required|string|max:255",
                "password" => "required|string|min:6|confirmed",
            ];

            $request->validate($roles);

            $type = AccountType::find(3);

            if($type){
                $account = new Account();
                $account->account_type = $type->id;
                $account->name = $request->get('name');
                $account->agency_name = $request->user()->agency_name;
                $account->parent_id = $request->user()->id;
                $account->phone = $request->get('phone');
                $account->title = $request->get('title');
                $account->plan_id = $type->plan_id;
                $account->password = bcrypt($request->get('password'));
                $account->save();

                return response()->json([
                    'success' => true,
                    'message' => __('Your Member Has Been Added Successfully'),
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
        else {
            return response()->json([
                'success' => false,
                'message' => __('Sorry You are not allowed to add member!'),
                'data' => []
            ], 403);
        }


    }
    public function updateMember(Request $request, $id){

        $account = Account::find($id);
        if($account){
            if($account->parent_id === $request->user()->id){
                $roles = [
                    "name" => "sometimes|string|max:255",
                    "phone" => "sometimes|string|max:255|unique:accounts,phone,".$id,
                    "title" => "sometimes|string|max:255",
                    "email" => "nullable|email|string|max:255",
                    "address" => "nullable|string|max:255",
                ];

                $request->validate($roles);

                if($request->has('name') && !empty($request->get('name'))){
                    $account->name = $request->get('name');
                }
                if($request->has('phone') && !empty($request->get('phone'))){
                    $account->phone = $request->get('phone');
                }
                if($request->has('email') && !empty($request->get('email'))){
                    $account->email = $request->get('email');
                }
                if($request->has('address') && !empty($request->get('address'))){
                    $account->address = $request->get('address');
                }
                if($request->has('title') && !empty($request->get('title'))){
                    $account->title = $request->get('title');
                }

                $account->save();

                if($request->hasFile('profile_image')){
                    $account->addMedia($request->file('profile_image'))->toMediaCollection('profile_image');
                }

                return response()->json([
                    'success' => true,
                    'message' => __('Your Member Has Been Added Successfully'),
                    'data' => []
                ]);
            }
            else {
                return response()->json([
                    'success' => false,
                    'message' => __('Sorry You are not allowed to update this member!'),
                    'data' => []
                ], 403);
            }
        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('Member Not Found'),
                "data" => []
            ], 404);
        }
    }
    public function destroyMember(Request $request, $id){
        $account = Account::find($id);
        if($account){
            if($account->parent_id === $request->user()->id){
                $account->delete();
                return response()->json([
                    'success' => true,
                    'message' => __('Your Member Has Been Deleted Successfully'),
                    'data' => []
                ]);
            }
            else {
                return response()->json([
                    "success" => false,
                    "message" => __('You are not authorized to delete this member'),
                    "data" => []
                ], 404);
            }

        }
        else {
            return response()->json([
                "success" => false,
                "message" => __('Member Not Found'),
                "data" => []
            ], 404);
        }
    }
}
