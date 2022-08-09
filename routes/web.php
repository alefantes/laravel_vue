<?php

use Illuminate\Support\Facades\Route;


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/','IndexController');
Route::get('/{page}','IndexController')->where('page','.*')->name('index');
