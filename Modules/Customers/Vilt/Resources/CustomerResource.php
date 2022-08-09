<?php

namespace Modules\Customers\Vilt\Resources;

use Modules\Base\Helpers\Resources\Action;
use Modules\Customers\Entities\Customer;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Customers\Vilt\Resources\Customer\Actions\CustomerGroupAction;
use Modules\Customers\Vilt\Resources\Customer\Modals\CustomerGroupModal;

class CustomerResource extends Resource
{
    public $model = Customer::class;
    public $icon = "bx bxs-user";
    public $group = "CRM";
    public $api = true;

    public function rows()
    {
        return [
            Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),
            Row::make('customer_group_id')->validation("required|array")->label('customer_group')->type('hasOne')->list(false)->relation('customerGroup')->model(\Modules\Customers\Entities\CustomersGroup::class)->get(),
            Row::make('name')->validation("required|max:255")->label(__('Name '))->get(),
            Row::make('email')->unique(true)->validation("required|max:255|email|string")->label(__('Email '))->type('email')->get(),
            Row::make('password')->validation("required|max:255|string|min:8|confirmed")->label(__('Password '))->type('password')->list(false)->view(false)->get(),
            Row::make('password_confirmation')->label(__('Password Confirmation'))->type('password')->list(false)->view(false)->get(),
            Row::make('phone')->label(__('Phone '))->type('text')->get(),
            Row::make('company')->list(false)->validation("nullable|max:255")->label(__('Company '))->get(),
            Row::make('address')->list(false)->validation("nullable|max:255")->label(__('Address '))->get(),
            Row::make('city')->list(false)->validation("nullable|max:255")->label(__('City '))->get(),
            Row::make('state')->list(false)->validation("nullable|max:255")->label(__('State '))->get(),
            Row::make('zip')->list(false)->validation("nullable|max:255")->label(__('Zip '))->get(),
            Row::make('country')->list(false)->validation("nullable|max:255")->label(__('Country '))->get(),
            Row::make('website')->list(false)->validation("nullable|max:255")->label(__('Website '))->get(),
        ];
    }

    public function actions(): array
    {
        return [
            CustomerGroupAction::class
        ];
    }

    public function modals(): array
    {
        return [
            CustomerGroupModal::class
        ];
    }
}
