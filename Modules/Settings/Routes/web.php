<?php

use Illuminate\Support\Facades\Route;
use Modules\Settings\Http\Controllers\SettingsController;

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

//Route::middleware(['auth:sanctum', 'verified'])->group(function () {
//    Route::get('/admin/themes', [SettingsController::class, 'themes'])->name('themes');
//    Route::get('/admin/commands', [SettingsController::class, 'commands'])->name('commands');
//    Route::get('/admin/translations', [SettingsController::class, 'translations'])->name('translations');
//    Route::get('/admin/backup', [SettingsController::class, 'backup'])->name('backup');
//    Route::get('/admin/acl', [SettingsController::class, 'acl'])->name('acl');
//    Route::get('/admin/log', [SettingsController::class, 'log'])->name('log');
//    Route::get('/admin/plugins', [SettingsController::class, 'plugins'])->name('plugins');
//    Route::get('/admin/settings', [SettingsController::class, 'settings'])->name('settings');
//    Route::post('/admin/settings', [SettingsController::class, 'settingsSave'])->name('settings.save');
//});
