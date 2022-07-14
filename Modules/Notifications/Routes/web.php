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
// ])->name('admin.')->group(function () {
//     Route::get('admin/notifications', [Modules\Notifications\Http\Controllers\NotificationsController::class, 'user'])->name('notifications.index');
//     Route::post('admin/notifications/bulk', [Modules\Notifications\Http\Controllers\NotificationsController::class, 'userBulk'])->name('notifications.bulk');
//     Route::delete('admin/notifications/{id}/delete', [Modules\Notifications\Http\Controllers\NotificationsController::class, 'userDestroy'])->name('notifications.destory');
//     Route::post('admin/notifications/clear', [Modules\Notifications\Http\Controllers\NotificationsController::class, 'clearUser'])->name('notifications.clear');
// });
// Route::middleware([
//     'auth:customer'
// ])->name('profile.')->group(function () {
//     Route::get('profile/notifications', [Modules\Notifications\Http\Controllers\NotificationsController::class, 'customer'])->name('notifications.index');
//     Route::post('profile/notifications/bulk', [Modules\Notifications\Http\Controllers\NotificationsController::class, 'customerBulk'])->name('notifications.bulk');
//     Route::delete('profile/notifications/{id}/delete', [Modules\Notifications\Http\Controllers\NotificationsController::class, 'customerDestroy'])->name('notifications.destory');
//     Route::post('profile/notifications/clear', [Modules\Notifications\Http\Controllers\NotificationsController::class, 'clearCustomer'])->name('notifications.clear');
//     Route::post('token', [Modules\Notifications\Http\Controllers\UserNotificationController::class, 'token'])->name('notifications.token');
// });
// Route::middleware([
//     'auth:sanctum',
//     'verified'
// ])->prefix('admin/user-notifications')->name('user_notifications.')->group(function () {
//     Route::get('/', [Modules\Notifications\Http\Controllers\UserNotificationController::class, 'index'])->name('index');
//     Route::post('/', [Modules\Notifications\Http\Controllers\UserNotificationController::class, 'store'])->name('store');
//     Route::post('{id}/update', [
//         Modules\Notifications\Http\Controllers\UserNotificationController::class,
//         'update'
//     ])->name('update');
//     Route::delete('{id}/delete', [
//         Modules\Notifications\Http\Controllers\UserNotificationController::class,
//         'destroy'
//     ])->name('destory');
//     Route::post('bulk', [Modules\Notifications\Http\Controllers\UserNotificationController::class, 'bulk'])->name('bulk');
//     Route::post('token', [Modules\Notifications\Http\Controllers\UserNotificationController::class, 'token'])->name('token');
// });

// Route::middleware([
//     'auth:sanctum',
//     'verified'
// ])->prefix('admin/notifiactions-templates')->name('notifiactions_templates.')->group(function () {
//     Route::get('/', [Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class, 'index'])->name('index');
//     Route::post('/', [Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class, 'store'])->name('store');
//     Route::post('{id}/update', [
//         Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class,
//         'update'
//     ])->name('update');
//     Route::delete('{id}/delete', [
//         Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class,
//         'destroy'
//     ])->name('destory');
//     Route::post('bulk', [Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class, 'bulk'])->name('bulk');
// });

// Route::middleware([
//     'auth:sanctum',
//     'verified'
// ])->prefix('admin/notifiactions-templates')->name('notifiactions_templates.')->group(function () {
//     Route::get('/', [Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class, 'index'])->name('index');
//     Route::post('/', [Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class, 'store'])->name('store');
//     Route::post('{id}/update', [
//         Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class,
//         'update'
//     ])->name('update');
//     Route::delete('{id}/delete', [
//         Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class,
//         'destroy'
//     ])->name('destory');
//     Route::post('bulk', [Modules\Notifications\Http\Controllers\NotifiactionsTemplatesController::class, 'bulk'])->name('bulk');
// });

// Route::middleware(['auth:sanctum',
// 'verified'])->prefix('admin/notifications-logs')->name('notifications_logs.')->group(function () {
// Route::get('/', [Modules\Notifications\Http\Controllers\NotificationsLogsController::class, 'index'])->name('index');
// Route::post('/', [Modules\Notifications\Http\Controllers\NotificationsLogsController::class, 'store'])->name('store');
// Route::post('{id}/update', [Modules\Notifications\Http\Controllers\NotificationsLogsController::class,
// 'update'])->name('update');
// Route::delete('{id}/delete', [Modules\Notifications\Http\Controllers\NotificationsLogsController::class,
// 'destroy'])->name('destory');
// Route::post('bulk', [Modules\Notifications\Http\Controllers\NotificationsLogsController::class, 'bulk'])->name('bulk');
// });
