<?php

namespace Modules\Payment\Resources;
use Modules\Payment\Entities\PaymentLog;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class PaymentLogResource extends Resource
{
    public $model = PaymentLog::class;
    public $icon = "bx bxs-circle";
    public $group = "Payments";
    public $api = false;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

                                Row::make('status')->validation("required|bool")->label(__('Status '))->type('switch')->get(),

                                Row::make('payload')->label(__('Payload '))->type('trans')->get(),

                                Row::make('response')->label(__('Response '))->type('trans')->get(),

                ];
    }
}
