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
        foreach (self::$dashboardMenuItems as $key => $item) {
            array_push(self::$dashboardMenuItemsFull, [
                "name" => $key,
                "menu" => $item
            ]);
        }
        return self::$dashboardMenuItemsFull;
    }

    public static function loadProfileMenu()
    {
        return self::$profileMenuItems;
    }
}
