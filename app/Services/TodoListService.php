<?php
namespace App\Services;

use App\Repositories\fruitRepository;

class TodoListService
{
    public function percentUpdate($todo_list)
    {
        // todoList percent update
        $items           = $todo_list->todoListItems;
        $all_count       = $items->count();
        $completed_count = $items->where("checked", 1)->count();
        $percent         = round(($completed_count / $all_count) * 100);

        // todoList current mark update
        $rate_list = $todo_list->rateLabelSetting->rateSettings;
        $rate = collect($rate_list)->where("percent", ">=", $percent)->sortBy("percent")->first();

        $todo_list->fill([
            "current_percent" => $percent,
            "current_mark_id" => $rate->mark_id
        ])->save();
    }

}