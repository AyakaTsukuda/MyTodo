import React from "react"
import dayjs from "dayjs";
import { useForm } from "@inertiajs/react";


const TodoListTableItem = ({todoList, deleteMode}) => {

    const { data, setData, delete:destroy, processing } = useForm({
        deleteItemId: null,
    })


    return(<div className="list-item py-2">
        {deleteMode && <div className="w-8">
            <input 
                id="delete-item"
                name="deleteItem"
                className="text-red-500 focus:ring-white" 
                type="radio" 
                value={todoList.id}
                onChange={(e)=>{setData("deleteItemId", e.target.value)}}/>
        </div>}
        <div className="w-24">
            {dayjs(todoList.updated_at).format("MM/DD")}
        </div>
        <div className="flex-1">
            {!deleteMode 
                ? <a href={route("todolist.show", todoList.id)}>{todoList.title}</a>
                : <span>{todoList.title}</span>}
        </div>
        <div className="flex-1 flex gap-1 items-center">
            <i className={`${todoList.current_mark.class_name} fa-fw`}></i>
            <div className="flex flex-col gap-1">
                <span>{todoList.current_percent} %</span>
                <span className="text-xxs">{todoList.rate_label_setting.label_name}</span>
            </div>
        </div>
        {/* チェック中のやつだけごみ箱マーク出したい。。。 */}
    </div>)
}

export default TodoListTableItem