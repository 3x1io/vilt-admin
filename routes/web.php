<?php

use Inertia\Inertia;
use App\Vilt\Base\Core;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Modules\Base\Helpers\Resources\Generator;
use Modules\Base\Services\Rows\Text;

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
        Text::make('name')
            ->label(__('My Name'))
            ->hint(__('To go to next page of the last'))
            ->placeholder(__('Please Input Your Name'))
            ->required()
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
