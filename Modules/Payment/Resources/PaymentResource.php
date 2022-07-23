<?php

namespace Modules\Payment\Resources;
use Modules\Payment\Entities\Payment;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class PaymentResource extends Resource
{
    public $model = Payment::class;
    public $icon = "bx bxs-circle";
    public $group = "Content";
    public $api = false;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),
        
                                Row::make('approved_by')->validation("nullable|")->label(__('Approved By '))->get(),
        
                                Row::make('plan_id')->validation("nullable|array")->label('plan')->type('hasOne')->list(false)->options(\Modules\Payment\Entities\Plan::all()->toArray())->get(),
                
                                Row::make('bank_id')->validation("nullable|array")->label('bank')->type('hasOne')->list(false)->options(\Modules\Payment\Entities\Bank::all()->toArray())->get(),
                
                                Row::make('payment_method_id')->validation("nullable|array")->label('payment_method')->type('hasOne')->list(false)->options(\Modules\Payment\Entities\PaymentMethod::all()->toArray())->get(),
                
                                Row::make('payment_status_id')->validation("nullable|array")->label('payment_status')->type('hasOne')->list(false)->options(\Modules\Payment\Entities\PaymentStatus::all()->toArray())->get(),
                
                                Row::make('model_id')->validation("required|")->label(__('Model Id '))->get(),
        
                                Row::make('model_type')->validation("required|max:255|")->label(__('Model Type '))->get(),
        
                                Row::make('transaction_code')->unique(true)->validation("required|max:255|")->label(__('Transaction Code '))->get(),
        
                                Row::make('payment_type')->validation("required|max:255|")->label(__('Payment Type '))->get(),
        
                                Row::make('amount')->label(__('Amount '))->type('number')->get(),
        
                                Row::make('notes')->validation("nullable|max:255|")->label(__('Notes '))->get(),
        
                                Row::make('vendor')->validation("nullable|max:255|")->label(__('Vendor '))->get(),
        
                                Row::make('vendor_id')->validation("nullable|max:255|")->label(__('Vendor Id '))->get(),
        
                                Row::make('vendor_status')->validation("nullable|max:255|")->label(__('Vendor Status '))->get(),
        
                ];
    }
}
