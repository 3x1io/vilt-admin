<?php

use App\Models\User;
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


Route::middleware(['web', 'auth:sanctum', 'verified'])->prefix('translations')->name('translations.')->group(function () {
    Route::get('/', [io3x1\ViltTranslations\Http\Controllers\Admin\TranslationsController::class, 'index'])->name('index');
    Route::post('/', [io3x1\ViltTranslations\Http\Controllers\Admin\TranslationsController::class, 'store'])->name('store');
    Route::post('{id}/update', [io3x1\ViltTranslations\Http\Controllers\Admin\TranslationsController::class, 'update'])->name('update');
    Route::delete('{id}/delete', [io3x1\ViltTranslations\Http\Controllers\Admin\TranslationsController::class, 'destroy'])->name('destory');
    Route::post('bulk', [io3x1\ViltTranslations\Http\Controllers\Admin\TranslationsController::class, 'bulk'])->name('bulk');
    Route::get('scan', [io3x1\ViltTranslations\Http\Controllers\Admin\TranslationsController::class, 'scan'])->name('scan');
    Route::post('switch', [io3x1\ViltTranslations\Http\Controllers\Admin\TranslationsController::class, 'change'])->name('switch');
});
