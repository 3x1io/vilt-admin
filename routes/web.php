<?php

use App\Heplers\Generator\ResourceGenerator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Admin\UploadController;
use App\Http\Controllers\Admin\DriversController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\DashboardController;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::post('upload', [UploadController::class, 'index'])->name('upload');
    Route::post('upload/remove', [UploadController::class, 'remove'])->name('upload.remove');
    Route::get('/admin', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/admin/themes', [DashboardController::class, 'themes'])->name('themes');
    Route::get('/admin/commands', [DashboardController::class, 'commands'])->name('commands');
    Route::get('/admin/translations', [DashboardController::class, 'translations'])->name('translations');
    Route::get('/admin/backup', [DashboardController::class, 'backup'])->name('backup');
    Route::get('/admin/acl', [DashboardController::class, 'acl'])->name('acl');
    Route::get('/admin/log', [DashboardController::class, 'log'])->name('log');
    Route::get('/admin/plugins', [DashboardController::class, 'plugins'])->name('plugins');
    Route::get('/admin/settings', [DashboardController::class, 'settings'])->name('settings');
});
