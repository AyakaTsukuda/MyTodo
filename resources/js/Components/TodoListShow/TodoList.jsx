import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todo_list_items}) => {

    const TodoListItemLine = todo_list_items.length == 0 
        ? <div className="p-2">新しいTodoアイテムは、Createフォームから作成できます。</div> 
        : todo_list_items.map((item,index)=>{
        return <TodoListItem contents={item} key={index}/>
    })

    return (
        <div>
            {TodoListItemLine}
        </div>
    );
}

export default TodoList;
