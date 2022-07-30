<?php

namespace Modules\Payment\Resources;
use Modules\Payment\Entities\PaymentMethod;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class PaymentMethodResource extends Resource
{
    public $model = PaymentMethod::class;
    public $icon = "bx bxs-circle";
    public $group = "Payments";
    public $api = false;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),

                                Row::make('name')->validation("required|max:255|")->label(__('Name '))->get(),

                                Row::make('description')->validation("nullable|max:255|")->label(__('Description '))->get(),

                                Row::make('color')->validation("nullable|max:255|")->label(__('Color '))->get(),

                                Row::make('icon')->validation("nullable|max:255|")->label(__('Icon '))->get(),

                                Row::make('activated')->validation("required|bool")->label(__('Activated '))->type('switch')->get(),

                ];
    }
}
