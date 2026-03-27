<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\FeatureController;

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AboutController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/services', [ServiceController::class, 'index']);
Route::get('/company', [CompanyController::class, 'index']);

Route::get('/features', [FeatureController::class, 'index']);

Route::get('/contact', [ContactController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);
