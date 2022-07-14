<?php

namespace Modules\Payment\Http\Services;

use Modules\Payment\Events\CallBackEvent;
use Modules\Payment\Http\Helpers\HttpHelper;
use Modules\Payment\Http\Interfaces\IFawryInterface;
use Modules\Payment\Http\Interfaces\IPaymentInterface;

class FawryPlusPaymentService implements IPaymentInterface, IFawryInterface
{
    use HttpHelper;


    private $uri;
    private $secretKey;
    private $merchantCode;
    private $integrations;
    private $data = [];

    /*
        constractor get the data from config file that provided from service provider

     */

    public function __construct($integrations)
    {
        foreach ($integrations as $integration)
            $this->integrations[$integration->key] = $integration->value;
    }


    /**
     *
     * initiat the request and return self object
     */

    public function init($attributes)
    {

        $this->data = collect($attributes->only(['returnUrl', 'chargeItems','paymentMethod']))->merge([
            'merchantRefNum' => rand(1111, 9999),
            'merchantCode' => $this->integrations['merchant_code'],
        ]);

        $this->data['signature'] = $this->generateSignature();
        return $this;
    }


    /**
     *
     * call the http post method and return status ,data and message
     *
     */

    public function pay()
    {
        return $this->post($this->integrations['testing_uri'], $this->data);
    }


    /**
     *
     * depending of what the callback will do
     *
     * event and the user deal with the response if PAID,EXPIRED etc
     *
     *
     */


    public function callBack($request)
    {
        event(new CallBackEvent($request));
    }

    public function saveToLogs()
    {
        //wait for it
        // TODO: Implement SaveToLogs() method.

    }


    /**
     *
     * generating signature that fawry want for auth
     *
     *  */

    public function generateSignature()
    {
        $data = collect($this->data['chargeItems']);

        $items = $data->map(function ($item) {
            return $item['itemId'] . $item['quantity'] . number_format((float)$item['price'],2,'.','');
        })->join('');


        return hash(
            'sha256',
            $this->data['merchantCode'] .
                $this->data['merchantRefNum'] .
                $this->data['returnUrl'] .
                $items .
                $this->integrations['security_key']
        );
    }
}
