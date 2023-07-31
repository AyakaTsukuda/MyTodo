<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoListItemCreateRequest;
use App\Models\TodoList;
use App\Models\TodoListItem;
use App\Services\TodoListService;
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

        (new TodoListService)->percentUpdate($todo_list);

        return redirect()->route("todolist.show",$todo_list_id);
    }


    public function update(Request $request)
    {
        //validated

        // dd($request->all());
        $todo_list_item_id = $request->todo_list_item_id;


        $todo_list_item = TodoListItem::findOrFail($todo_list_item_id);

        if($request->from == "check_task"){
            $todo_list_item->fill([
                "checked" => !$todo_list_item->checked
            ])->save();
            (new TodoListService)->percentUpdate($todo_list_item->todoList);

        } else {
            $request->validate(["item" => "required|max:255"]);
            $todo_list_item->fill([
                "item" => $request->item
            ])->save();
        }

        return redirect()->back();
    }


    public function destroy(String $todo_list_item_id)
    {
        $todo_list_item = TodoListItem::findOrFail($todo_list_item_id);

        $todo_list_item->delete();

        (new TodoListService)->percentUpdate($todo_list_item->todoList);

        return redirect()->back();
    }
}
