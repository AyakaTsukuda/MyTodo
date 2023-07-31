import React from "react"
import { useForm } from "@inertiajs/react"


const TodoListDeleteForm = ({contents, setIsDeleteFormOpen}) => {
    
    const {delete:destroy, processing} = useForm()

    const handleSubmit = (e) => {
        e.preventDefault()
        destroy(route("todolistitem.destroy",contents.id),{
            onSuccess:()=>setIsDeleteFormOpen(false)
        })
    }


    return(<form className="flex gap-2 w-full" onSubmit={handleSubmit}>
        <div className="flex gap-1 items-center w-full">
            <div className="my-1 px-1 text-gray-200 bg-gray-200 rounded-md border border-gray-300">
                <i className="fa-solid fa-check"></i>
            </div>
            <div className="flex-1">
                {contents.item}
            </div>
            <div className="text-red-600 font-bold text-sm flex-1">
                このアイテムを削除します。
            </div>
        </div>
        <button className="text-gray-600" onClick={()=>setIsDeleteFormOpen(false)} disabled={processing}>
            <i className="fa-solid fa-reply text-3xl"></i>
        </button>
        <button className="text-red-600" type="submit" disabled={processing}>
            <i className="fa-solid fa-trash-can text-3xl"></i>
        </button>
    </form>)
}

export default TodoListDeleteForm