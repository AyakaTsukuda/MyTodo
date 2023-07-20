import React from "react"
import dayjs from "dayjs";


const TodoListTableItem = ({todoList}) => {


    return(<div className="list-item py-2">
        <div className="w-24">
            {dayjs(todoList.updated_at).format("MM/DD")}
        </div>
        <div className="flex-1">
            <a href={route("todolist.show", todoList.id)}>
                {todoList.title}
            </a>
        </div>
        <div className="flex-1 flex gap-1 items-center">
            <i className={`${todoList.current_mark.class_name} fa-fw`}></i>
            <div className="flex flex-col gap-1">
                <span>{todoList.current_percent} %</span>
                <span className="text-xxs">{todoList.rate_label_setting.label_name}</span>
            </div>
        </div>
    </div>)
}

export default TodoListTableItem