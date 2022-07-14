<?php

namespace Modules\Payment\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Payment\Http\Helpers\ApiResponse;
use Modules\Payment\Http\Factories\PaymentFactory;

/*
    this class for test the service act as example for how to use this package
*/

class PaymentController extends Controller
{

    private $payment;

    /*
        this constructor get an object from factory class that
        get an instanse from payment methods you can find
        it's registration in payment service provider

    */
    public function __construct(PaymentFactory $payment)
    {
        $this->payment = $payment;
        $this->payment->fillData();

    }




    /*
        |try if the payment method is invalid will fire ex
        |and return the ex message "invalid getway "


       | try the payment method  if any ex happen from payment side
       | will retrun status false and the ex message



    */

    public function paymentMethod(Request $request)
    {

        try {
            $result = $this->payment->get(request()->get('paymentMethod'))
                ->init($request)
                ->pay();
        } catch (\Exception $e) {

            return ApiResponse::errors($e->getMessage(), 400);
        }


        if (!$result['status'])
            return ApiResponse::errors($result['message'], 500);

        return  ApiResponse::data($result['data'], "done", 200);
    }


    public function paymentCallback(Request $request, $paymentMethod)
    {

        try {
            $this->payment->get($paymentMethod)->callBack($request->all());
        } catch (\Exception $e) {
            //save to logs
        }
    }
}
