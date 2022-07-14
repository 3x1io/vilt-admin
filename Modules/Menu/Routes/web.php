<?php

use Illuminate\Support\Facades\Route;

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

// Route::middleware([
//     'auth:sanctum',
//     'verified'
// ])->prefix('admin/menus-groups')->name('menus_groups.')->group(function () {
//     Route::get('/', [Modules\Menu\Http\Controllers\MenusGroupsController::class, 'index'])->name('index');
//     Route::post('/', [Modules\Menu\Http\Controllers\MenusGroupsController::class, 'store'])->name('store');
//     Route::post('{id}/update', [
//         Modules\Menu\Http\Controllers\MenusGroupsController::class,
//         'update'
//     ])->name('update');
//     Route::delete('{id}/delete', [
//         Modules\Menu\Http\Controllers\MenusGroupsController::class,
//         'destroy'
//     ])->name('destory');
//     Route::post('bulk', [Modules\Menu\Http\Controllers\MenusGroupsController::class, 'bulk'])->name('bulk');
// });

// Route::middleware([
//     'auth:sanctum',
//     'verified'
// ])->prefix('admin/menus/admin')->name('menus.admin.')->group(function () {
//     Route::get('/', [Modules\Menu\Http\Controllers\MenusController::class, 'index'])->name('index');
//     Route::post('/', [Modules\Menu\Http\Controllers\MenusController::class, 'store'])->name('store');
//     Route::post('{id}/update', [
//         Modules\Menu\Http\Controllers\MenusController::class,
//         'update'
//     ])->name('update');
//     Route::delete('{id}/delete', [
//         Modules\Menu\Http\Controllers\MenusController::class,
//         'destroy'
//     ])->name('destory');
//     Route::post('bulk', [Modules\Menu\Http\Controllers\MenusController::class, 'bulk'])->name('bulk');
// });


// Route::middleware([
//     'auth:sanctum',
//     'verified'
// ])->prefix('admin/menus/customer')->name('menus.customer.')->group(function () {
//     Route::get('/', [Modules\Menu\Http\Controllers\MenusController::class, 'indexCustomer'])->name('index');
//     Route::post('/', [Modules\Menu\Http\Controllers\MenusController::class, 'storeCustomer'])->name('store');
//     Route::post('{id}/update', [
//         Modules\Menu\Http\Controllers\MenusController::class,
//         'updateCustomer'
//     ])->name('update');
//     Route::delete('{id}/delete', [
//         Modules\Menu\Http\Controllers\MenusController::class,
//         'destroyCustomer'
//     ])->name('destory');
//     Route::post('bulk', [Modules\Menu\Http\Controllers\MenusController::class, 'bulkCustomer'])->name('bulk');
// });
