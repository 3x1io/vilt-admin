<?php


use Modules\Menu\Entities\Menus;
use Modules\Base\Helpers\Menu\Menu;
use Modules\Base\Helpers\Vilt\Core;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Cookie;
use Modules\Menu\Entities\MenusGroups;

// Core::registerProfileMenuItem(Menu::make('Profile')->icon('bxs-user')->route('profile.show'));
$getMenu = Menus::with('group')->orderBy('sort', 'asc')->get();
if (!empty(Cookie::get('lang'))) {
    $local = explode('|', Crypt::decrypt(Cookie::get('lang'), false))[1];
} else {
    $local = "en";
}

app()->setLocale($local);

include base_path('Modules/Base/Helpers/Menu/Lang.php');

foreach ($getMenu as $item) {
    if ($item->group && $item->group->type == 'group') {
        Core::registerDashboardMenuItem(Menu::make($item->title)->icon($item->icon)->route($item->route)->can($item->can == "1" ? true : $item->can), $item->group->name);
    } else if ($item->group && $item->group->type == 'front') {
        Core::registerFrontMenuItem(Menu::make($item->title)->icon($item->icon)->route($item->route)->can($item->can == "1" ? true : $item->can), $item->group->name);
    } else {
        Core::registerDashboardMenuItem(Menu::make($item->title)->icon($item->icon)->route($item->route)->can($item->can == "1" ? true : $item->can));
    }
}
