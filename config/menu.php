<?php

return [
    'name' => 'Menu',

    'provider' => !env('MENU_DATABASE'),

    'database' => env('MENU_DATABASE'),
];
