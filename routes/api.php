<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('loaders', App\Http\Controllers\API\LoaderAPIController::class);


Route::resource('groups', App\Http\Controllers\API\GroupAPIController::class);


Route::resource('customers', App\Http\Controllers\API\CustomerAPIController::class);


Route::resource('customers_locations', App\Http\Controllers\API\CustomersLocationAPIController::class);
