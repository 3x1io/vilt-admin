<?php

namespace Modules\Customers\Resources;

use Illuminate\Http\Request;
use Modules\Base\Helpers\Resources\Action;
use Modules\Base\Helpers\Resources\AddRoute;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Filter;
use Modules\Base\Helpers\Resources\Modal;
use Modules\Base\Helpers\Resources\Table;
use Modules\Customers\Entities\Customer;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class CustomerResource extends Resource
{
    public $model = Customer::class;
    public $icon = "bx bxs-circle";
    public $group = "Content";
    public $api = true;

    public function rows()
    {
        return [
            Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

            Row::make('customer_group_id')->relation('customersGroup')->validation("required|array")->label(__('Customer Group'))->type('hasOne')->model(\Modules\Customers\Entities\CustomersGroup::class)->get(),

            Row::make('name')->validation("required|max:255")->label(__('Name '))->get(),

            Row::make('email')->unique(true)->validation("required|max:255|email|string")->label(__('Email '))->type('email')->get(),

            Row::make('phone')->label(__('Phone '))->type('text')->get(),

            Row::make('company')->list(false)->validation("nullable|max:255")->label(__('Company '))->get(),

            Row::make('address')->list(false)->validation("nullable|max:255")->label(__('Address '))->get(),

            Row::make('city')->list(false)->validation("nullable|max:255")->label(__('City '))->get(),

            Row::make('state')->list(false)->validation("nullable|max:255")->label(__('State '))->get(),

            Row::make('zip')->list(false)->validation("nullable|max:255")->label(__('Zip '))->get(),

            Row::make('country')->list(false)->validation("nullable|max:255")->label(__('Country '))->get(),

            Row::make('website')->list(false)->validation("nullable|max:255")->label(__('Website '))->get(),

            Row::make('password')->edit(false)->validation([
                "create" => "required|max:255|string|min:8|confirmed",
                "update" => "nullable"
            ])->label(__('Password '))->type('password')->list(false)->view(false)->get(),
            Row::make('password_confirmation')->edit(false)->label(__('Password Confirmation'))->type('password')->list(false)->view(false)->get(),


        ];
    }

    public function table(){
        return Table::make('table')->filters([
            Filter::make('customer_group_id')->rows([
                Row::make('customer_group_id')->relation('customersGroup')->validation("required|array")->label(__('Customer Group'))->type('hasOne')->list(false)->model(\Modules\Customers\Entities\CustomersGroup::class)->get(),
            ])->render()
        ])->actions([
            Action::make('password')->type('main')->label(__('Password'))->icon('bx bx-lock')->modal('password')->render(),
        ])->render();
    }

    public function setFilters($query, $request)
    {
        if($request->has('customer_group_id')){
            $query->where('customer_group_id', $request->customer_group_id);
        }
    }

    public function modals(){
        return [
            Modal::make('password')->rows([
                Row::make('password')->validation("required|max:255|string|min:8|confirmed")->label(__('Password '))->type('password')->list(false)->view(false)->get(),
                Row::make('password_confirmation')->label(__('Password Confirmation'))->type('password')->list(false)->view(false)->get(),
            ])->title('Update Password')->buttons([
                Action::make('password')->type('main')->label(__('Set Password'))->icon('bx bx-lock')->action('customers.password')->render(),
            ])->render()
        ];
    }

    public  function route(){
        return [
            AddRoute::make('password')->method('password')->path('password')->type('post')->controller(static::class)->get(),
        ];
    }

    public function password(Request $request){
        $request->validate([
            'password' => 'required|max:255|string|min:8|confirmed',
            'id' => 'required|integer'
        ]);

        $customer = Customer::find($request->id);
        $customer->password = bcrypt($request->password);
        $customer->save();

        return Alert::make(__('Password Changed Success'))->fire();
    }
}
