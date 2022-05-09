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


Route::middleware(['web', 'auth:sanctum', 'verified'])->prefix('users')->name('users.')->group(function () {
    Route::get('/', [io3x1\ViltRoles\Http\Controllers\Admin\UserController::class, 'index'])->name('index');
    Route::post('/', [io3x1\ViltRoles\Http\Controllers\Admin\UserController::class, 'store'])->name('store');
    Route::post('{id}/update', [io3x1\ViltRoles\Http\Controllers\Admin\UserController::class, 'update'])->name('update');
    Route::delete('{id}/delete', [io3x1\ViltRoles\Http\Controllers\Admin\UserController::class, 'destroy'])->name('destory');
    Route::post('bulk', [io3x1\ViltRoles\Http\Controllers\Admin\UserController::class, 'bulk'])->name('bulk');
});

Route::middleware(['web', 'auth:sanctum', 'verified'])->prefix('roles')->name('roles.')->group(function () {
    Route::get('/', [io3x1\ViltRoles\Http\Controllers\Admin\RolesController::class, 'index'])->name('index');
    Route::post('/', [io3x1\ViltRoles\Http\Controllers\Admin\RolesController::class, 'store'])->name('store');
    Route::post('{id}/update', [io3x1\ViltRoles\Http\Controllers\Admin\RolesController::class, 'update'])->name('update');
    Route::delete('{id}/delete', [io3x1\ViltRoles\Http\Controllers\Admin\RolesController::class, 'destroy'])->name('destory');
    Route::post('bulk', [io3x1\ViltRoles\Http\Controllers\Admin\RolesController::class, 'bulk'])->name('bulk');
    Route::post('generate', [io3x1\ViltRoles\Http\Controllers\Admin\RolesController::class, 'generate'])->name('generate');
});
