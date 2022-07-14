<?php

namespace Modules\Menu\Resources;

use Modules\Menu\Entities\Menus;
use Illuminate\Support\Facades\Route;
use Modules\Menu\Entities\MenusGroups;
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Core;
use Modules\Base\Helpers\Resources\Action;
use Modules\Base\Helpers\Resources\AddRoute;
use Modules\Base\Helpers\Resources\Alert;
use Modules\Base\Helpers\Resources\Resource;

class MenuResource extends Resource
{
    public $model = Menus::class;
    public $icon = "bx bx-menu";
    public $group = "Settings";

    public function rows()
    {
        $routeList = [];
        $routeCollection = Route::getRoutes();
        foreach ($routeCollection as $key => $route) {
            $show = false;
            foreach ($route->methods as $method) {
                if ($method === 'GET') {
                    $show = true;
                }
            }
            if ($show) {
                if (isset($route->action['as'])) {
                    array_push($routeList, [
                        "name" => $route->uri,
                        "id" => $route->action['as']
                    ]);
                } else {
                    array_push($routeList, [
                        "name" => $route->uri,
                        "id" => $route->uri
                    ]);
                }
            }
        }

        return [
            Row::make('id')->label(__('Id'))->create(false)->edit(false)->get(),
            Row::make('group_id')->label('group')->type('hasOne')->track_by_name('title')->options(MenusGroups::all()->toArray())->get(),
            Row::make('title')->label(__('Title'))->type('trans')->get(),
            Row::make('description')->label(__('Description'))->type('trans')->list(false)->get(),
            Row::make('icon')->type('icon')->label(__('Icon'))->get(),
            Row::make('type')->label(__('Type'))->type('select-value')->options([
                [
                    "name" => __('Route'),
                    "id" => "route"
                ],
                [
                    "name" => __('URL'),
                    "id" => "url"
                ]
            ])->list(false)->get(),
            Row::make('route')->label(__('Route'))->type('select-value')->options($routeList)->reactive([
                "name" => __('Route'),
                "id" => "route"
            ])->row('type')->list(false)->get(),
            Row::make('url')->label(__('Url'))->reactive([
                "name" => __('URL'),
                "id" => "url"
            ])->row('type')->list(false)->get(),
            Row::make('sort')->label(__('Sort'))->list(false)->type('number')->default(0)->get(),
            Row::make('target')->label(__('Target'))->list(false)->type('switch')->get(),
            Row::make('can')->list(false)->label(__('Can'))->get(),
            Row::make('badge')->label(__('Badge'))->type('trans')->list(false)->get(),
            Row::make('counter')->label(__('Counter'))->list(false)->get(),
        ];
    }

    public function actions()
    {
        return [
            Action::make('generate')->label(__('Generate'))->icon('bx bx-menu')->action('menus.generate')->render()
        ];
    }

    public function route()
    {
        return [
            AddRoute::make('generate')->path('generate')->controller(static::class)->method('generate')->type('post')->get()
        ];
    }

    public function generate()
    {
        $menus = Core::loadDashboardMenu();

        $countSorting = 0;
        foreach ($menus as $menuGroup) {
            $group = MenusGroups::where('name', 'LIKE', '%' . $menuGroup['name'] . '%')->where('type', 'group')->first();
            if (empty($group)) {
                $group = new MenusGroups();
                $group->name = $menuGroup['name'];
                $group->type = "group";
                $group->save();
            }


            foreach ($menuGroup['menu'] as $getMenu) {
                $menu = Menus::where('route', $getMenu['route'])->first();
                if (!$menu) {
                    $menu = new Menus();
                    $menu->title = $getMenu['title'];
                    $menu->icon = $getMenu['icon'];
                    $menu->route = $getMenu['route'];
                    $menu->sort = $countSorting;
                    $menu->url = $getMenu['url'];
                    $menu->type = $getMenu['type'];
                    $menu->can = $getMenu['can'];
                    $menu->lang = $getMenu['lang'];
                    $menu->group_id = $group->id;
                    $menu->save();
                }
                $countSorting++;
            }
        }

        return Alert::make(__('Menu Generated Success'))->fire();
    }
}
