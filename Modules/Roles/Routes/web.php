<?php

use Illuminate\Support\Facades\Route;
use Modules\Roles\Http\Controllers\UserController;
use Modules\Roles\Http\Controllers\RolesController;
use Modules\Roles\Resources\RolesResource;

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

Route::post('roles/generate', [RolesResource::class, 'generate']);
