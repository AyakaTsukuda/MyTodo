<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoListItemCreateRequest;
use App\Models\TodoList;
use App\Models\TodoListItem;
use Illuminate\Http\Request;

class TodoListItemController extends Controller
{
    public function store(TodoListItemCreateRequest $request, String $todo_list_id)
    {
        $todo_list   = TodoList::findOrFail($todo_list_id);
        $create_item = new TodoListItem([
            "item" => $request->item,
            "todo_list_id" => $todo_list->id
        ]);
        $todo_list->todoListItems()->save($create_item);

        return redirect()->route("todolist.show",$todo_list_id);
    }
}
