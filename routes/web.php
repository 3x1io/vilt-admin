<?php

use Inertia\Inertia;
use App\Vilt\Base\Core;
use App\Services\Rows\Text;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Modules\Base\Helpers\Resources\Generator;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/test', function () {
    $generator = new Generator("customers", "Customers");
    return $generator->getFileds();
});
