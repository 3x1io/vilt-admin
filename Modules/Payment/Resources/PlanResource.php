<?php

namespace Modules\Payment\Resources;
use Illuminate\Http\Request;
use Modules\Payment\Entities\Plan;
use Modules\Base\Helpers\Resources\Row;
use Illuminate\Support\Facades\Validator;
use Modules\Payment\Entities\PaymentMethod;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Payment\Enums\BaseUserPlanTypeEnum;
use Modules\Payment\Traits\PlanValidationTrait;

class PlanResource extends Resource
{
    use PlanValidationTrait;

    public $model = Plan::class;
    public $icon = "bx bxs-circle";
    public $group = "Payments";
    public $api = false;

    public function rows()
    {
        return [
            Row::make("id")
                ->label(__("Id "))
                ->create(false)
                ->edit(false)
                ->get(),

            Row::make("name")
                ->label(__("Name "))
                ->get(),

            Row::make("icons")
                ->label(__("Icons "))
                ->get(),

            Row::make("payment_methods")
                ->label(__("Payment Methods"))
                ->type("relation")
                ->multi(true)
                ->options(PaymentMethod::all()->toArray())
                ->get(),

            Row::make("plan_user_type")
                ->type('select-value')
                ->options(BaseUserPlanTypeEnum::labels())
                ->label(__("Plan User Type "))
                ->track_by_id('id')
                ->get(),

            Row::make("descriptions")
                ->label(__("Descriptions "))
                ->type("textarea")
                ->get(),

            Row::make("price_monthly")
                ->label(__("Price Monthly "))
                ->type("number")
                ->get(),

            Row::make("price_yearly")
                ->label(__("Price Yearly "))
                ->type("number")
                ->get(),

            Row::make("order")
                ->label(__("Plan Order "))
                ->type("number")
                ->get(),

            Row::make("is_public")
                ->label(__("Is Public "))
                ->type("switch")
                ->get(),

            Row::make("is_recurring")
                ->label(__("Is Recurring "))
                ->type("switch")
                ->get(),

            Row::make("is_default")
                ->label(__("Is Default "))
                ->type("switch")
                ->get(),

            Row::make("is_active")
                ->label(__("Is Active "))
                ->type("switch")
                ->get(),
        ];
    }


    public function validStore(Request $request)
    {
        return $this->getValidatedRules($request);
    }


    public function afterStore(Request $request, $record)
    {

        $record->payment_methods()->sync($this->getPaymentMehtodsIds($request));
    }

    public function validUpdate(Request $request, $record)
    {
        return $this->getValidatedRules($request);
    }

    public function afterUpdate(Request $request, $record)
    {
        $record->payment_methods()->sync($this->getPaymentMehtodsIds($request));
    }

    private function getPaymentMehtodsIds(Request $request)
    {
        return array_values(collect($request->payment_methods)->pluck('id')->toArray());
    }

    private function getValidatedRules(Request $request)
    {
        $validator = Validator::make($request->all(), static::storeRules());
        $validator->validate();
        return $validator;
    }
}
