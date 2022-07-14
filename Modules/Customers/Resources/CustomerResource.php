<?php

namespace Modules\Customers\Resources;

use Modules\Customers\Entities\Customer;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class CustomerResource extends Resource
{
    public $model = Customer::class;
    public $icon = "bx bxs-circle";
    public $group = "Content";

    public function rows()
    {
        return [
            Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

            Row::make('name')->validation("required|max:255|")->label(__('Name '))->get(),

            Row::make('phone')->label(__('Phone '))->type('tel')->get(),

            Row::make('email')->unique(true)->validation("required|max:255|email|string")->label(__('Email '))->type('email')->get(),

            Row::make('address')->label(__('Address '))->type('textarea')->get(),

            Row::make('password')->validation("nullable|max:255|string|min:8|confirmed")->label(__('Password '))->type('password')->list(false)->view(false)->get(),
            Row::make('password_confirmation')->label(__('Password Confirmation'))->type('password')->list(false)->view(false)->get(),

            Row::make('in')->label(__('In '))->type('number')->get(),

            Row::make('out')->label(__('Out '))->type('number')->get(),

            Row::make('brithday')->label(__('Brithday '))->type('date')->get(),

            Row::make('info')->label(__('Info '))->type('trans')->get(),

            Row::make('login')->validation("nullable|bool")->label(__('Login '))->type('switch')->get(),

            Row::make('active')->validation("nullable|bool")->label(__('Active '))->type('switch')->get(),

        ];
    }
}
