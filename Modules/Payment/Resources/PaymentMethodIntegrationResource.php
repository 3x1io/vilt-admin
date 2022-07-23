<?php

namespace Modules\Payment\Resources;
use Modules\Payment\Entities\PaymentMethodIntegration;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class PaymentMethodIntegrationResource extends Resource
{
    public $model = PaymentMethodIntegration::class;
    public $icon = "bx bxs-circle";
    public $group = "Content";
    public $api = false;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),
        
                                Row::make('payment_method_id')->validation("required|array")->label('payment_method')->type('hasOne')->list(false)->options(\Modules\Payment\Entities\PaymentMethod::all()->toArray())->get(),
                
                                Row::make('key')->validation("required|max:255|")->label(__('Key '))->get(),
        
                                Row::make('value')->validation("required|max:255|")->label(__('Value '))->get(),
        
                ];
    }
}
