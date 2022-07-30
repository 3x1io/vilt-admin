<?php

namespace Modules\Payment\Resources;
use Modules\Payment\Entities\PaymentStatus;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class PaymentStatusResource extends Resource
{
    public $model = PaymentStatus::class;
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

                ];
    }
}
