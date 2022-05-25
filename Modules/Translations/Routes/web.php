<?php

use Illuminate\Support\Facades\Route;
use Modules\Translations\Http\Controllers\TranslationsController;

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
    Route::get('/', [TranslationsController::class, 'index'])->name('index');
    Route::post('/', [TranslationsController::class, 'store'])->name('store');
    Route::post('{id}/update', [TranslationsController::class, 'update'])->name('update');
    Route::delete('{id}/delete', [TranslationsController::class, 'destroy'])->name('destory');
    Route::post('bulk', [TranslationsController::class, 'bulk'])->name('bulk');
    Route::get('scan', [TranslationsController::class, 'scan'])->name('scan');
    Route::post('switch', [TranslationsController::class, 'change'])->name('switch');
    Route::get('export', [TranslationsController::class, 'export'])->name('export');
    Route::post('import', [TranslationsController::class, 'import'])->name('import');
});
