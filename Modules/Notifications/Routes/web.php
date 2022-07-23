<?php

use Illuminate\Support\Facades\Route;
use Modules\Notifications\Http\Controllers\NotificationsController;

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


 Route::middleware([
     'auth:sanctum',
     'verified'
 ])->name('admin.')->group(function () {
     Route::get('admin/notifications', [NotificationsController::class, 'index'])->name('notifications.index');
     Route::post('admin/notifications/bulk', [NotificationsController::class, 'userBulk'])->name('notifications.bulk');
     Route::delete('admin/notifications/{id}/delete', [NotificationsController::class, 'userDestroy'])->name('notifications.destory');
     Route::post('admin/notifications/clear', [NotificationsController::class, 'clearUser'])->name('notifications.clear');
     Route::post('token', [NotificationsController::class, 'token'])->name('notifications.token');

 });


