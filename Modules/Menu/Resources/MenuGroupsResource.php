<?php

namespace Modules\Menu\Resources;

use Modules\Menu\Entities\Menus;
use Illuminate\Support\Facades\Route;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;
use Modules\Menu\Entities\MenusGroups;

class MenuGroupsResource extends Resource
{
    public $model = MenusGroups::class;
    public $icon = "bx bx-bookmarks";
    public $group = "Menus";

    public function rows()
    {
        return [
            Row::make('id')->label(__('Id'))->create(false)->edit(false)->get(),
            Row::make('type')->label(__('Type'))->type('select-value')->options([
                [
                    "name" => __('Group'),
                    "id" => "group",
                ],
                [
                    "name" => __('Front'),
                    "id" => "front",
                ]
            ])->get(),
            Row::make('name')->label(__('Name'))->type('trans')->get(),
            Row::make('icon')->type('icon')->label(__('Icon'))->get(),
            Row::make('badge')->label(__('Badge'))->type('trans')->list(false)->get(),
            Row::make('counter')->default(0)->type('number')->label(__('Counter'))->list(false)->get(),
            Row::make('can')->label(__('Can'))->list(false)->get(),

        ];
    }
}
