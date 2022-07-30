<?php

use Illuminate\Support\Facades\Route;
use Modules\Base\Helpers\Resources\Core;
use Modules\Base\Http\Controllers\UploadController;
use Modules\Base\Http\Controllers\DashboardController;

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

$routes = Core::loadRoutes();
foreach ($routes as $route) {
    if($route['settings']){
        Route::middleware($route['middleware'])->prefix('/admin/settings/' . str_replace('_', '-', $route['table']))->name("admin.settings.".$route['table'] . ".")->group(function () use ($route) {
            if ($route['custom']) {
                foreach ($route['custom'] as $item) {
                    Route::{$item['type']}($item['path'], [$item['controller'], $item['method']])->name($item['name']);
                }
            }
            Route::get("/", [$route['controller'], 'index'])->name('index');
            Route::post("/", [$route['controller'], 'store'])->name('store');
        });
    }
    else {
        Route::middleware($route['middleware'])->prefix('/admin/' . str_replace('_', '-', $route['table']))->name($route['table'] . ".")->group(function () use ($route) {
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
            Route::get("/{id}", [$route['controller'], 'show'])->name('show');
            Route::post("/{id}", [$route['controller'], 'update'])->name('update');
            Route::delete("/{id}", [$route['controller'], 'destory'])->name('destory');
        });
    }

}

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::post('upload', [UploadController::class, 'index'])->name('upload');
    Route::post('upload/remove', [UploadController::class, 'remove'])->name('upload.remove');
    Route::get('/admin', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/select', [DashboardController::class, 'select'])->name('select');
    Route::post('logout', [DashboardController::class, 'logout'])->name('logout');
});
