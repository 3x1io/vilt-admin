<?php

namespace Modules\Payment\Resources;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Modules\Payment\Entities\Feature;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Payment\Enums\BaseFeatureEnum;

class FeatureResource extends Resource
{
    public $model = Feature::class;
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

            Row::make("key")
                ->unique(true)
                ->label(__("Key "))
                ->get(),

            Row::make("description")
                ->label(__("Description "))
                ->get(),

            Row::make("type")
                ->label(__('Type'))
                ->type('select-value')
                ->options(BaseFeatureEnum::labels())
                ->get(),

            Row::make("is_public")
                ->validation("required|bool")
                ->label(__("Is Public "))
                ->type("switch")
                ->get(),


            Row::make("is_active")
                ->validation("required|bool")
                ->label(__("Is Active "))
                ->type("switch")
                ->get(),
        ];
    }

    public function validStore(Request $request)
    {
        $rules = [
            'name' => 'required|max:255',
            'type.id' => Rule::in(BaseFeatureEnum::values()),
            'key' => 'required|max:255',
            'description' => 'nullable|max:255',
            'is_public' => 'required|bool',
            'is_active' => 'required|bool',
        ];

        $validator = Validator::make($request->all(), $rules);
        $validator->validate();
        return $validator;
    }
//    public function beforeStore(Request $request)
//    {
//        dd($request->all());
//    }
}
