import React from "react"
import { useForm } from "@inertiajs/react"
import TextInput from "../TextInput"
import InputError from "../InputError"


const TodoListEditForm = ({contents, setIsEditFormOpen}) => {

    const {data, setData, put, errors, processing} = useForm({
        item : contents.item
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route("todolistitem.label.update",contents.id),{
            onSuccess: () => setIsEditFormOpen(false) 
        })
    }


    return(<form onSubmit={handleSubmit} className="w-full flex gap-2">
        <div className="flex gap-1 w-full">
            <div className="my-1 px-1 text-gray-200 bg-gray-200 rounded-md border border-gray-300">
                <i className="fa-solid fa-check"></i>
            </div>
            <div className="w-full">
                <TextInput
                    className="w-full" 
                    type="text" 
                    value={data.item} 
                    onChange={(e)=>setData("item",e.target.value)} 
                    disabled={processing}/>
                {errors.item && <InputError message={errors.item}/>}
            </div>
        </div>
        <button className="text-gray-600" onClick={()=>setIsEditFormOpen(false)} disabled={processing}>
            <i className="fa-solid fa-reply fa-xl"></i>
        </button>
        <button className="text-gray-600" type="submit" disabled={processing}>
            <i className="fa-solid fa-floppy-disk fa-xl"></i>
        </button>
    </form>)
}

export default TodoListEditForm