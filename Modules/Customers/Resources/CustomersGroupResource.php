<?php

namespace Modules\Customers\Resources;
use Modules\Customers\Entities\CustomersGroup;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class CustomersGroupResource extends Resource
{
    public $model = CustomersGroup::class;
    public $icon = "bx bxs-circle";
    public $group = "Content";
    public $api = true;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),
        
                                Row::make('name')->unique(true)->validation("required|max:255")->label(__('Name '))->get(),
        
                                Row::make('description')->validation("nullable|max:255")->label(__('Description '))->get(),
        
                                Row::make('color')->validation("nullable|max:255")->label(__('Color '))->get(),
        
                                Row::make('icon')->validation("nullable|max:255")->label(__('Icon '))->get(),
        
                                Row::make('activated')->validation("required|bool")->label(__('Activated '))->type('switch')->get(),
        
                ];
    }
}
