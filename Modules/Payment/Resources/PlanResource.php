<?php

namespace Modules\Payment\Resources;
use Modules\Payment\Entities\Plan;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class PlanResource extends Resource
{
    public $model = Plan::class;
    public $icon = "bx bxs-circle";
    public $group = "Content";
    public $api = false;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),
        
                                Row::make('payment_method')->validation("required|")->label(__('Payment Method '))->get(),
        
                                Row::make('name')->validation("required|max:255|")->label(__('Name '))->get(),
        
                                Row::make('icons')->validation("nullable|max:255|")->label(__('Icons '))->get(),
        
                                Row::make('plan_user_type')->validation("required|max:255|")->label(__('Plan User Type '))->get(),
        
                                Row::make('descriptions')->label(__('Descriptions '))->type('textarea')->get(),
        
                                Row::make('price_monthly')->label(__('Price Monthly '))->type('number')->get(),
        
                                Row::make('price_yearly')->label(__('Price Yearly '))->type('number')->get(),
        
                                Row::make('is_public')->validation("required|bool")->label(__('Is Public '))->type('switch')->get(),
        
                                Row::make('is_recurring')->validation("required|bool")->label(__('Is Recurring '))->type('switch')->get(),
        
                                Row::make('is_default')->validation("required|bool")->label(__('Is Default '))->type('switch')->get(),
        
                                Row::make('is_active')->validation("required|bool")->label(__('Is Active '))->type('switch')->get(),
        
                ];
    }
}
