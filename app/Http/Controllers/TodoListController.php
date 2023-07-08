<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class TodoListController extends Controller
{
    public function index()
    {
        return Inertia::render("TodoList/Index");
    }


    public function show(String $todo_list_item_id)
    {
        return Inertia::render("TodoList/Show");
    }


    public function update(String $todo_list_item_id)
    {
        // update...
    }


    public function destroy(String $todo_list_item_id)
    {
        // destroy...
    }
}
