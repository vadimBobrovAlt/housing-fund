<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function () {

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('me', [AuthController::class, 'me']);
        Route::get('logout', [AuthController::class, 'logout']);
    });

    Route::post('login', [AuthController::class, 'login']);
    Route::post('signUp', [AuthController::class, 'signUp']);

});
