<?php

use Illuminate\Support\Facades\Route;
use Modules\Roles\Http\Controllers\UserController;
use Modules\Roles\Http\Controllers\RolesController;

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
    Route::get('/', [UserController::class, 'index'])->name('index');
    Route::post('/', [UserController::class, 'store'])->name('store');
    Route::post('{id}/update', [UserController::class, 'update'])->name('update');
    Route::delete('{id}/delete', [UserController::class, 'destroy'])->name('destory');
    Route::post('bulk', [UserController::class, 'bulk'])->name('bulk');
});

Route::middleware(['web', 'auth:sanctum', 'verified'])->prefix('roles')->name('roles.')->group(function () {
    Route::get('/', [RolesController::class, 'index'])->name('index');
    Route::post('/', [RolesController::class, 'store'])->name('store');
    Route::post('{id}/update', [RolesController::class, 'update'])->name('update');
    Route::delete('{id}/delete', [RolesController::class, 'destroy'])->name('destory');
    Route::post('bulk', [RolesController::class, 'bulk'])->name('bulk');
    Route::post('generate', [RolesController::class, 'generate'])->name('generate');
});
