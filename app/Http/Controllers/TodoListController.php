<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoListCreateRequest;
use App\Models\RateLabelSetting;
use App\Models\TodoList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class TodoListController extends Controller
{
    public function index()
    {
        $todo_lists = TodoList::with(['currentMark','rateLabelSetting'])->mine()->get();

        $rate_label_settings = RateLabelSetting::mine()->with("rateSettings")->get();

        return Inertia::render("TodoList/Index")
            ->with("todoLists", $todo_lists)
            ->with("rateLabelSettings", $rate_label_settings);
    }


    public function store(TodoListCreateRequest $request)
    {
        $todo_list = new TodoList([
            "user_id"               => Auth::user()->id,
            "title"                 => $request->title,
            "rate_label_setting_id" => $request->rate_label_setting_id
        ]);
        $todo_list->save();

        $rate_label_setting = RateLabelSetting::find($request->rate_label_setting_id);
        $rate_label_setting->num_of_use = $rate_label_setting->num_of_use +1;
        $rate_label_setting->save();

        return redirect()->route("todolist.show", $todo_list->id);
    }


    public function show(String $todo_list_id)
    {
        $todo_list       = TodoList::with("currentMark")->findOrFail($todo_list_id);
        $todo_list_items = $todo_list->todoListItems;
        $completed_count = $todo_list->todoListItems()->where("checked", 1)->count();

        return Inertia::render("TodoList/Show")
            ->with("todo_list", $todo_list)
            ->with("todo_list_items", $todo_list_items)
            ->with("completed_count", $completed_count);
    }


    public function update(String $todo_list_id)
    {
        // update...
    }


    public function destroy(String $todo_list_id)
    {
        $todo_list = TodoList::findOrFail($todo_list_id);
        $todo_list->delete();
        return redirect()->back();
    }
}
