import React from "react";
import dayjs from "dayjs";


const TodoListTable = ({todoLists}) => {

    const has_list = todoLists.length > 0 ? true : false

    const tableItem = todoLists.map((item, index)=>{
        console.log(item)
        return (<div className="list-item py-2" key={index}>
            <div className="w-24">{dayjs(item.updated_at).format("MM/DD")}</div>
            <div className="flex-1">{item.title}</div>
            <div className="flex-1 flex gap-1 items-center">
                <i className={`${item.current_mark.class_name} fa-2xl`}></i>
                <div className="flex flex-col gap-1">
                    <span>Todo %</span>
                    <span className="text-xxs">{item.rate_label_setting.label_name}</span>
                </div>
            </div>
        </div>)
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