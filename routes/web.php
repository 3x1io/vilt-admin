<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Modules\Base\Helpers\Resources\Generator;
use Modules\Base\Services\Rows\Color;
use Modules\Base\Services\Rows\Date;
use Modules\Base\Services\Rows\Email;
use Modules\Base\Services\Rows\Number;
use Modules\Base\Services\Rows\Option;
use Modules\Base\Services\Rows\Select;
use Modules\Base\Services\Rows\Tel;
use Modules\Base\Services\Rows\Text;
use Modules\Base\Services\Rows\Textarea;
use Modules\Base\Services\Rows\Toggle;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test', function () {
      $row = Text::make('name');
      return response()->json([
        'data' => $row,
      ]);
});

Route::get('/test-view', function () {
    $rows = [
        Text::make('name')->default('Fady Mondy'),
        Email::make('email')->default('info@3x1.io'),
        Tel::make('phone')->default('+201207860084'),
        Number::make('flat')->default(220),
        Textarea::make('address'),
        Text::make('title'),
        Select::make('type')
            ->options([
                Option::make(__('User'))->id('user')->media('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')->description('For Admin Roles'),
                Option::make(__('Admin'))->id('admin')->media('https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg')->description('For User Roles'),
            ]),
        Toggle::make('active')->color('indigo')->default(true),
        Color::make('color')->default('#ff0000'),
        Date::make('date'),
        \Modules\Base\Services\Rows\DateTime::make('datetime'),
        \Modules\Base\Services\Rows\Time::make('time'),
    ];
    return Inertia::render('Test', [
        "rows" => $rows
    ]);
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
