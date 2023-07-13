<?php

namespace App\Http\Controllers;

use App\Models\RateLabelSetting;
use App\Models\TodoList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class TodoListController extends Controller
{
    public function index()
    {
        $todo_lists = TodoList::mine()->get();

        $rate_label_settings = RateLabelSetting::mine()->with("rateSettings")->get();

        return Inertia::render("TodoList/Index")
            ->with("todoLists", $todo_lists)
            ->with("rateLabelSettings", $rate_label_settings);
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
