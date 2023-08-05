import { React } from "react";
import TodoListTableItem from "./TodoListTableItem";


const TodoListTable = ({todoLists, isDeleteFormShow, setIsDeleteFormShow, setTargetDeleteId, targetDeleteId}) => {

    const has_list = todoLists.length > 0 ? true : false

    const tableItem = todoLists.map((item, index)=>{
        return <TodoListTableItem 
                    todoList={item} 
                    key={index} 
                    isDeleteFormShow={isDeleteFormShow}
                    setIsDeleteFormShow={setIsDeleteFormShow} 
                    setTargetDeleteId={setTargetDeleteId} 
                    targetDeleteId={targetDeleteId}/>
    });

    return(<div>
        {has_list && <div id="todo-list-items">
            <div className="mb-6 font-bold">
                Todo List 
                {isDeleteFormShow && <span className="ml-4 text-red-500"><i className="fa-solid fa-eraser mr-1"></i>DeleteMode</span>}
            </div>
            <div className="list-header">
                {isDeleteFormShow && <div className="w-8"></div>}
                <div className="w-24">更新日</div>
                <div className="w-full">タイトル</div>
                <div className="w-24">達成率</div>
                <div className="w-24"></div>
            </div>
            {tableItem}
        </div>}

        {!has_list && <div>
            新しいTodoListは、<span className="uppercase font-bold">create</span>ボタンから作成できます。
        </div>}
    </div>)
}

export default TodoListTable;