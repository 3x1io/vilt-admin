<?php

namespace Modules\Base\Helpers\Resources;

use PhpParser\Node\Expr\FuncCall;
use Illuminate\Support\Facades\File;
use Modules\Base\Helpers\Resources\Lang;
use Modules\Base\Helpers\Resources\Menu;
use Modules\Base\Helpers\Resources\Share;

class Core
{
    private static ?array $dashboardMenuItems = [];
    private static ?array $dashboardMenuItemsFull = [];
    private static ?array $profileMenuItems = [];
    private static ?array $trans = [];
    private static ?array $share = [];
    private static ?array $routes = [];

    public static function get()
    {
        $data = [
            "menu" => self::loadDashboardMenu(),
            "dropdown" => self::loadProfileMenu(),
            "trans" => self::loadLanguage(),
            "appName" => config('app.name'),
            "appUrl" => url('/'),
            "message" => session()->get('message')
        ];

        $share = self::loadShareData();

        return array_merge($data, $share);
    }

    public static function loadResources($module)
    {
        $files = File::files(module_path($module) . '/Resources');
        foreach ($files as $file) {
            $fileName = $file->getRelativePathname();
            if (strpos($fileName, "Resource.php")) {
                $path = $file->getPath();
                $filterPath = str_replace(base_path(), "", str_replace(base_path() . 'Core.php/', "", $path));
                $className = str_replace("/", "\\", $filterPath . '/' . str_replace(".php", "", $fileName));
                self::registerResource($className);
            }
        }
    }

    public static function loadPages($module)
    {
        $files = File::files(module_path($module) . '/Pages');
        foreach ($files as $file) {
            $fileName = $file->getRelativePathname();
            if (strpos($fileName, "Page.php")) {
                $path = $file->getPath();
                $filterPath = str_replace(base_path(), "", str_replace(base_path() . 'Core.php/', "", $path));
                $className = str_replace("/", "\\", $filterPath . '/' . str_replace(".php", "", $fileName));
                self::registerPage($className);
            }
        }
    }

    public static function registerDashboardMenuItem($item, $group = 0)
    {
        if (!array_key_exists($group, self::$dashboardMenuItems)) {
            self::$dashboardMenuItems[$group] = [];
        }
        array_push(self::$dashboardMenuItems[$group], $item->get());
    }

    public static function registerProfileMenuItem(Menu $item)
    {
        array_push(self::$profileMenuItems, $item->get());
    }

    public static function registerGlobalTranslation(Lang $item)
    {
        $key = array_keys($item->get())[0];
        self::$trans[$key] = $item->get()[$key];
    }

    public static function registerPage($item)
    {

        $lang = app($item)->langs();

        foreach ($lang as $l) {
            self::registerGlobalTranslation($l);
        }

        $menu = app($item)->menus();

        foreach ($menu as $key => $m) {
            if (is_string($key)) {
                self::registerDashboardMenuItem($m, $key);
            } else {
                self::registerDashboardMenuItem($m);
            }
        }

        array_push(self::$routes, app($item)->routes());
    }

    public static function registerResource($item)
    {
        $lang = app($item)->langs();

        foreach ($lang as $l) {
            static::registerGlobalTranslation($l);
        }

        $menu = app($item)->menus();

        foreach ($menu as $key => $m) {
            if (is_string($key)) {
                self::registerDashboardMenuItem($m, $key);
            } else {
                self::registerDashboardMenuItem($m);
            }
        }
        array_push(self::$routes, app($item)->routes());
    }

    public static function registerShareData(Share $item)
    {
        $key = array_keys($item->get())[0];
        self::$share[$key] = $item->get()[$key];
    }

    public static function loadDashboardMenu()
    {
        if (auth()->user()) {
            foreach (self::$dashboardMenuItems as $key => $item) {
                array_multisort(array_column($item, 'sort'), SORT_DESC, $item);
                foreach ($item as $index => $menu) {

                    if (is_string($menu['can'])) {
                        if (!auth()->user()->can($menu['can'])) {
                            unset($item[$index]);
                        }
                    }
                }
                array_push(self::$dashboardMenuItemsFull, [
                    "name" => $key,
                    "menu" => $item
                ]);
            }
        }

        return self::$dashboardMenuItemsFull;
    }

    public static function loadProfileMenu()
    {
        return self::$profileMenuItems;
    }

    public static function loadLanguage()
    {
        $global = [
            "global.dashboard" => __('Dashboard'),
            "global.settings" => __('Settings'),
            "global.view" => __('View'),
            "global.edit" => __('Edit'),
            "global.delete" => __('Delete'),
            "global.create" => __('Create'),
            "global.search" => __('Search'),
            "global.pagination" => __('Pagination'),
            "global.pagination.from" => __('From'),
            "global.pagination.to" => __('To'),
            "global.pagination.results" => __('Results'),
            "global.pagination.per_page" => __('Per Page'),
            "global.bulk.message" => __('Do you when to run acction on selected items?'),
            "global.actions" => __('Actions'),
            "global.delete.message" => __('Do You when to delete this item?'),
            "global.filter.reset" => __('Reset Filter'),
            "global.show" => __('Show'),
            "global.to" => __('To'),
            "global.from" => __('From'),
            "global.of" => __('Of'),
            "global.results" => __('Results'),
            "global.per_page" => __('Per Page'),
            "global.new.item" => __('Add New Item'),
        ];
        return array_merge($global, self::$trans);
    }

    public static function loadShareData()
    {
        return self::$share;
    }

    public static function loadRoutes()
    {
        return self::$routes;
    }
}
