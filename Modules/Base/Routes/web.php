<?php

use Illuminate\Support\Facades\Route;
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


Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::post('upload', [UploadController::class, 'index'])->name('upload');
    Route::post('upload/remove', [UploadController::class, 'remove'])->name('upload.remove');
    Route::get('/admin', [DashboardController::class, 'index'])->name('dashboard');
});
