<?php

namespace Modules\Payment\Http\Factories;

use Exception;
use Illuminate\Support\Facades\Cache;
use Modules\Payment\Entities\PaymentMethod;
use Modules\Payment\Http\Interfaces\IPaymentInterface;
use Modules\Payment\Http\Services\FawryPlusPaymentService;

/**
 *
 * this class choose and register payment methods that provided in service provider
 *
 */
class PaymentFactory{


    public $gateways = [];

    /**
     *
     * register array of payment methods that get it from service provider
     * array consist of name of method and object from payment interface calss
     *
     */
    function register ($name, IPaymentInterface $instance)
    {
        $this->gateways[$name] = $instance;
        return $this;
    }

    /**
     *
     * get the payment class that the user want
     * if not exist return ex
     *
     */

    function get($name)
    {
        if (array_key_exists($name, $this->gateways)) {
            return $this->gateways[$name];
        } else {
            throw new Exception("Invalid gateway");
        }
    }

    public function fillData()
    {

        $paymentMethods = PaymentMethod::select('id')->where('activated', 1)->with('integration')->get();

        foreach ($paymentMethods as $method) {

            if (count($method->integration) > 0) {
               $className= $method->integration->where('key','class_name')->value('value');
                $this->register($method->id, new $className($method->integration));

            }
        }
    }

}
