import React from "react";


const TodoListTable = ({todoLists}) => {

    const has_list = todoLists.length > 0 ? true : false

    const tableItem = todoLists.map((item, index)=>{
        return <li key={index}>{item.title}</li>
    });

    return(<div>
        {has_list && <div>
            <label className="font-bold">Todo List</label>
            <ul>
                {tableItem}
            </ul>
        </div>}

        {!has_list && <div>
            新しいTodoListは、<span className="uppercase font-bold">create</span>ボタンから作成できます。
        </div>}
    </div>)
}

export default TodoListTable;