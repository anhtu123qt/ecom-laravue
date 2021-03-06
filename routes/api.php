<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\Admin\ProductController;

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
Route::group(['prefix'=>'auth'],function (){
    Route::post('login',[UserController::class,'login']);
    Route::get('me',[UserController::class,'me'])->middleware('auth:api');
    Route::get('logout',[UserController::class,'logout']);
});
Route::group(['prefix' => 'admin'],function (){
    Route::apiResource('products',ProductController::class);
    Route::get('order',[OrderController::class,'get_order']);
});

// user
Route::post('purchase',[OrderController::class,'purchase']);
