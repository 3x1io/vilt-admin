<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Base\Helpers\Resources\Core;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$routes = Core::loadRoutes();
foreach ($routes as $route) {
    if ($route['api']) {
        Route::middleware('auth:sanctum')->prefix(str_replace('_', '-', $route['table']))->name($route['table'] . ".")->group(function () use ($route) {
            if ($route['custom']) {
                foreach ($route['custom'] as $item) {
                    Route::{$item['type']}($item['path'], [$item['controller'], $item['method']])->name($item['name']);
                }
            }
            Route::get("/", [$route['controller'], 'index'])->name('index');
            Route::post("/", [$route['controller'], 'store'])->name('store');
            Route::post("/bulk", [$route['controller'], 'bulk'])->name('bulk');
            Route::get("/export", [$route['controller'], 'export'])->name('export');
            Route::post("/import", [$route['controller'], 'import'])->name('import');
            Route::post("/{id}", [$route['controller'], 'update'])->name('update');
            Route::delete("/{id}", [$route['controller'], 'destory'])->name('destory');
        });
    }
}
