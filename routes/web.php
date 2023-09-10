<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TodoListController;
use App\Http\Controllers\TodoListItemController;
use App\Models\TodoListItem;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function(){
    return Inertia::render('Auth/Login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // TodoList
    Route::get('/todolist', [TodoListController::class, 'index'])->name('todolist.index');
    Route::post('/todolist/store', [TodoListController::class, 'store'])->name('todolist.store');
    Route::get('/todolist/{todo_list_id}', [TodoListController::class, 'show'])->name('todolist.show');
    Route::delete('/todoList/{todo_list_id}/destroy', [TodoListController::class, 'destroy'])->name('todolist.destroy');

    // TodoListItem
    Route::post('/todolist/{todo_list_id}/item/store', [TodoListItemController::class, 'store'])->name('todolistitem.store');
    Route::put('/todolist/item/update', [TodoListItemController::class, 'update'])->name('todolistitem.update');
    Route::put('/todolist/item/{todo_list_item_id}/label/update', [TodoListItemController::class, 'update'])->name('todolistitem.label.update');
    Route::delete('/todolist/item/{todo_list_item_id}/delete', [TodoListItemController::class, 'destroy'])->name('todolistitem.destroy');

    // Setting
    Route::get('/setting', [SettingController::class, 'index'])->name('setting.index');
    Route::post('/setting/store', [SettingController::class, 'store'])->name('setting.store');
    Route::delete('/setting/delete', [SettingController::class, 'destroy'])->name('setting.destroy');
    Route::put('/setting/update', [SettingController::class, 'update'])->name('setting.update');
});



require __DIR__.'/auth.php';

// Language Switcher Route 言語切替用ルートだよ
Route::get('language/{locale}', function ($locale) {
    app()->setLocale($locale);
    session()->put('locale', $locale);

    return redirect()->back();
});
