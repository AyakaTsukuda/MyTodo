import React from "react";
import TodoListTableItem from "./TodoListTableItem";


const TodoListTable = ({todoLists}) => {

    const has_list = todoLists.length > 0 ? true : false

    const tableItem = todoLists.map((item, index)=>{
        return <TodoListTableItem todoList={item} key={index} />
    });

    return(<div>
        {has_list && <div>
            <div className="mb-6 font-bold">Todo List</div>
            <div className="list-header">
                <div className="w-24">更新日</div>
                <div className="flex-1">タイトル</div>
                <div className="flex-1">達成率</div>
            </div>
            {tableItem}
        </div>}

        {!has_list && <div>
            新しいTodoListは、<span className="uppercase font-bold">create</span>ボタンから作成できます。
        </div>}
    </div>)
}

export default TodoListTable;