import React from "react"


const TodoListPercentDisplay = ({todoList, completedCount}) => {

    const items_count = todoList.todo_list_items.length

    const support_messages = todoList.current_mark.support_messages
    const get_message      = support_messages[Math.floor(Math.random() * support_messages.length)].message


    return(<div className="flex flex-col gap-8">
        {/* Main param */}
        <div className="flex gap-6 justify-center items-end text-2xl">
            <div>達成率</div>
            <div>
                <span className="font-bold text-6xl">{todoList.current_percent}</span>&nbsp;%
            </div>
            <div className="text-gray-600">
                <span className="text-4xl">{completedCount}</span>/{items_count}
            </div>
        </div>

        {/* Mark */}
        <div className="text-center text-9xl">
            <i className={todoList.current_mark.class_name}></i>
        </div>
        <div className="text-center">
            {get_message}
        </div>
    </div>)
}

export default TodoListPercentDisplay