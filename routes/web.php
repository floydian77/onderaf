<?php

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
    return view('welcome');
});

Route::namespace('API')
    ->prefix('api')
    ->group(function () {
        Route::apiResources([
            'initiatives' => 'InitiativeController',
            'organisations' => 'OrganisationController',
            'categories' => 'CategoryController',
            'conditions' => 'ConditionController',
            'layouts' => 'LayoutController',
            'entries' => 'EntryController'
        ]);
    });

Auth::routes();

// temp
Route::view('/passport', 'passport');

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');


Route::view('/register', 'welcome');


Route::fallback(function () {
    return view('welcome');
});

