<?php

namespace Modules\Payment\Http\Interfaces;

interface IPaymentInterface
{

    public function init($attributes);
    public function pay();
    public function callBack($request);
    public function saveToLogs();
}
