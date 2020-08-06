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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/articles',"Api\ArticleController@index");
Route::get('/articles/{id}',"Api\ArticleController@detail");

Route::post('/login', "Api\LoginController@login");
Route::get('/profile',"Api\LoginController@getUserByID");

Route::post('/register',"Api\RegisterController@register");
Route::post('/user/comment',"Api\ArticleController@comment");
