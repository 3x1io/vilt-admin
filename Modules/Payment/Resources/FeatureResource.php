<?php

namespace Modules\Payment\Resources;
use Modules\Payment\Entities\Feature;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class FeatureResource extends Resource
{
    public $model = Feature::class;
    public $icon = "bx bxs-circle";
    public $group = "Content";
    public $api = false;

    public function rows()
    {
        return [
                                        Row::make('id')->label(__('Id '))->create(false)->edit(false)->get(),
        
                                Row::make('name')->validation("required|max:255|")->label(__('Name '))->get(),
        
                                Row::make('key')->unique(true)->validation("required|max:255|")->label(__('Key '))->get(),
        
                                Row::make('description')->validation("nullable|max:255|")->label(__('Description '))->get(),
        
                                Row::make('type')->validation("required|max:255|")->label(__('Type '))->get(),
        
                                Row::make('extra')->label(__('Extra '))->type('trans')->get(),
        
                ];
    }
}
