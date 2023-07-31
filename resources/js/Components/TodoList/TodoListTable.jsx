import React from "react";
import TodoListTableItem from "./TodoListTableItem";


const TodoListTable = ({todoLists, deleteMode=false}) => {

    const has_list = todoLists.length > 0 ? true : false

    const tableItem = todoLists.map((item, index)=>{
        return <TodoListTableItem todoList={item} key={index} deleteMode={deleteMode} />
    });

    return(<div>
        {has_list && <div id="todo-list-items">
            <div className="mb-6 font-bold">
                Todo List 
                {deleteMode && <span className="ml-4 text-red-500"><i className="fa-solid fa-eraser mr-1"></i>DeleteMode</span>}
            </div>
            <div className="list-header">
                {deleteMode && <div className="w-8"></div>}
                <div className="w-24">更新日</div>
                <div className="flex-1">タイトル</div>
                <div className="flex-1">達成率</div>
                {deleteMode && <div className="flex-1"></div>}
            </div>
            {tableItem}
        </div>}

        {!has_list && <div>
            新しいTodoListは、<span className="uppercase font-bold">create</span>ボタンから作成できます。
        </div>}
    </div>)
}

export default TodoListTable;