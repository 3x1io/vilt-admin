<?php
namespace Modules\Payment\Traits;

use Illuminate\Validation\Rule;
use Modules\Payment\Enums\BaseUserPlanTypeEnum;

trait PlanValidationTrait
{

    public static function storeRules(): array
    {
        return  [
            'name'                  => 'required|max:255',
            'icons'                 => 'nullable|max:255',
            'payment_methods.*.id'  => 'exists:payment_methods,id',
            'plan_user_type.id'        => Rule::in(BaseUserPlanTypeEnum::values()),
            'descriptions'          => 'nullable|string|max:255',
            'price_monthly'         => 'numeric|min:0',
            'price_yearly'          => 'numeric|min:0',
            'order'                 => 'required|integer|min:0',
            'is_public'             => 'required|bool',
            'is_recurring'          => 'required|bool',
            'is_default'            => 'required|bool',
            'is_active'             => 'required|bool',
        ];
    }
}
