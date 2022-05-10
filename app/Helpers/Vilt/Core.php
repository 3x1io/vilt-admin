<?php

namespace App\Helpers\Vilt;

use App\Helpers\Menu\Menu;

class Core
{
    private static ?array $dashboardMenuItems = [];
    private static ?array $dashboardMenuItemsFull = [];
    private static ?array $profileMenuItems = [];

    public static function registerDashboardMenuItem(Menu $item, $group = 0)
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

    public static function loadDashboardMenu()
    {
        if (auth()->user()) {
            foreach (self::$dashboardMenuItems as $key => $item) {
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
        return [
            "global.dashboard" => __('global.dashboard'),
            "global.settings" => __('global.settings'),
            "global.view" => __('global.view'),
            "global.edit" => __('global.edit'),
            "global.delete" => __('global.delete'),
            "global.create" => __('global.create'),
            "global.search" => __('global.search'),
            "global.pagination" => __('global.pagination'),
            "global.pagination.from" => __('global.pagination.from'),
            "global.pagination.to" => __('global.pagination.to'),
            "global.pagination.results" => __('global.pagination.results'),
            "global.pagination.per_page" => __('global.pagination.per_page'),
            "global.bulk.message" => __('global.bulk.message'),
        ];
    }
}
