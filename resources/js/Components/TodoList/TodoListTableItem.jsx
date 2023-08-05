import { React, useState } from "react"
import dayjs from "dayjs";
import { useForm } from "@inertiajs/react";


const TodoListTableItem = ({todoList, isDeleteFormShow, setIsDeleteFormShow, setTargetDeleteId, targetDeleteId}) => {

    const { setData, delete:destroy, processing } = useForm({
        deleteItemId: null,
    })

    const isDeleteTarget = targetDeleteId==todoList.id ? true : false

    const handleSubmit = (e) => {
        e.preventDefault()

        destroy(route("todolist.destroy", todoList.id),{
            onSuccess: ()=>setIsDeleteFormShow(false)
        })
    }


    return(<form 
        className={`list-item py-2 ${isDeleteTarget && "bg-red-50"}`}
        onSubmit={handleSubmit}>
        
        {isDeleteFormShow && <div className="w-8">
            <input 
                id="delete-item"
                name="deleteItem"
                className="text-red-500 focus:ring-white" 
                type="radio" 
                value={todoList.id}
                onChange={(e)=>{
                    setData("deleteItemId", e.target.value)
                    setTargetDeleteId(e.target.value)
                }}
                disabled={processing}/>
        </div>}
        <div className="w-24">
            {dayjs(todoList.updated_at).format("MM/DD")}
        </div>
        <div className="w-full">
            {!isDeleteFormShow 
                ? <a href={route("todolist.show", todoList.id)}>{todoList.title}</a>
                : <span>{todoList.title}</span>}
        </div>
        <div className="w-24 flex gap-1 items-center">
            <i className={`${todoList.current_mark.class_name} fa-fw`}></i>
            <div className="flex flex-col gap-1">
                <span>{todoList.current_percent} %</span>
                <span className="text-xxs">{todoList.rate_label_setting.label_name}</span>
            </div>
        </div>
        <div className="w-24">
            {isDeleteTarget && <button className="disabled:opacity-50" type="submit" disabled={processing}>
                <i className="fa-solid fa-trash-can text-xl text-red-500"></i>
            </button>}
        </div>
    </form>)
}

export default TodoListTableItem