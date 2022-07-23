<?php

namespace Modules\Payment\Resources;
use Modules\Payment\Entities\Bank;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class BankResource extends Resource
{
    public $model = Bank::class;
    public $icon = "bx bxs-circle";
    public $group = "Content";
    public $api = false;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),
        
                                Row::make('bank_name')->validation("required|max:255|")->label(__('Bank Name '))->get(),
        
                                Row::make('branch')->validation("required|max:255|")->label(__('Branch '))->get(),
        
                                Row::make('account_name')->validation("required|max:255|")->label(__('Account Name '))->get(),
        
                                Row::make('account_number')->validation("required|max:255|")->label(__('Account Number '))->get(),
        
                                Row::make('iban')->validation("required|max:255|")->label(__('Iban '))->get(),
        
                ];
    }
}
