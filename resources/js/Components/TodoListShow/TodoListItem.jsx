import {React, useState} from "react"
import { router } from '@inertiajs/react';
import TodoListEditForm from "./TodoListEditForm"
import TodoListDeleteForm from "./TodoListDeleteForm"


const TodoListItem = ({contents}) => {

    const [ isEditFormOpen, setIsEditFormOpen ]     = useState(false)
    const [ isDeleteFormOpen, setIsDeleteFormOpen ] = useState(false)

    // const {data, setData, put} = useForm({
    // content_id : contents.id,
    // })

    const {checked, item} = contents

    console.log(item, checked);

    const handleUpdate = () => {

        router.put(
            route("todolistitem.update", contents.id), 
            { 
                todo_list_item_id : contents.id,
                from: "check_task",
            }
        )
    }

    // console.log(contents.checked)

    return(<div className={`py-2 px-1 border-b ${isDeleteFormOpen && "bg-red-100"}`}>
        <div className="flex gap-2 items-center">

            {/* show mode */}
            {(!isEditFormOpen && !isDeleteFormOpen) && <div className="flex gap-1 w-full">
                {/* <a href={route("todolistitem.update", contents.id)}
                    className={`px-1 text-white rounded-md border border-gray-300 focus:bg-gray-900 ${contents.checked==0 ? "" : "bg-gray-600"} `}>
                    <i className="fa-solid fa-check"></i>
                </a> */}
                <button type="button" onClick={handleUpdate}
                    className="px-1">
                    {checked == 1 && <i className="far fa-square-check text-3xl"></i>}
                    {checked != 1 && <i className="far fa-square text-3xl"></i>}
                </button>
                <div className="w-full">{contents.item}</div>
            </div>}

            {(!isEditFormOpen && !isDeleteFormOpen) && <button 
                className="text-gray-600"
                onClick={()=>setIsEditFormOpen(true)}>
                <i className="fa-solid fa-pen-to-square text-3xl"></i>
            </button>}

            {(!isEditFormOpen && !isDeleteFormOpen) && <button 
                className="text-gray-600"
                onClick={()=>setIsDeleteFormOpen(true)}>
                <i className="fa-solid fa-trash-can text-3xl"></i>
            </button>}

            {/* edit mode */}
            {isEditFormOpen && <TodoListEditForm contents={contents} setIsEditFormOpen={setIsEditFormOpen}/>}

            {/* delte mode */}
            {isDeleteFormOpen && <TodoListDeleteForm contents={contents} setIsDeleteFormOpen={setIsDeleteFormOpen}/>}
        </div>
    </div>)
}

export default TodoListItem