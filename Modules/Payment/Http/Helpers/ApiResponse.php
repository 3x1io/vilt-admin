<?php

namespace Modules\Payment\Http\Helpers;

class ApiResponse{
      
	public static function errors($errorsArray,$code){
		return response(['status' => false, 'message' => $errorsArray],$code);
	}

	public static function data($data,$message,$code){

		return response(['message'=>$message,'data' => $data,'status' => true],$code);
	}

	public static function success($message,$code)
      {
            return response(['status' => true, 'message' => $message],$code);
      }

    public static function bannedMessage()
    {
        return response(['status' => false, 'account_status' => 'banned', 'errors' => ['token' => [trans('main.account_is_banned')]]]);
    }
    public static function emptyToken()
    {
        return response(['status' => false, 'errors' => ['unauthorized'=>['you are unauthorized']]],401);
    }

    public static function emptyTokenHeader()
    {
        return response(['unauthorized'=>['you are unauthorized']],400);
    }

}