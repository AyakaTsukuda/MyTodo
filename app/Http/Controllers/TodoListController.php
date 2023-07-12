<?php

namespace App\Http\Controllers;

use App\Models\TodoList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class TodoListController extends Controller
{
    public function index()
    {
        $todo_lists = TodoList::mine()->get();

        return Inertia::render("TodoList/Index")
            ->with("todoLists", $todo_lists);
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
