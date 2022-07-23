<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Roles\Http\Controllers\AuthController;

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


Route::post('/login', [AuthController::class, 'login'])->name('api.login');
Route::post('/reset', [AuthController::class, 'reset'])->name('api.reset');
Route::post('/password', [AuthController::class, 'password'])->name('api.password');
Route::post('/active', [AuthController::class, 'active'])->name('api.active');
Route::post('/resend', [AuthController::class, 'resend'])->name('api.resend');
Route::post('/register', [AuthController::class, 'register'])->name('api.register');

Route::middleware('auth:sanctum')->prefix('profile')->name('api.profile.')->group(function() {
    Route::get('/user', [\Modules\Roles\Http\Controllers\ProfileController::class, 'user'])->name('user');
    Route::post('/user', [\Modules\Roles\Http\Controllers\ProfileController::class, 'update'])->name('update');
    Route::post('/password', [\Modules\Roles\Http\Controllers\ProfileController::class, 'password'])->name('password');
});
