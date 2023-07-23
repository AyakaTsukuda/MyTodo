import React from "react"
import { useForm } from "@inertiajs/react"
import TextInput from "../TextInput"
import PrimaryButton from "../PrimaryButton"
import InputError from "../InputError"


const TodoListCreateForm = ({todoList}) => {

    const {data, setData, processing, errors, post} = useForm({
        item         : ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route("todolistitem.store",todoList.id))
    }


    return(<form onSubmit={handleSubmit}>
        <div className="pt-4 border-t border-gray-200">
            <div className="text-gray-600 font-bold uppercase">
                Create
            </div>
            <div className="flex gap-2">
                <TextInput
                    className="w-full" 
                    type="text"
                    value={data.item}
                    onChange={(e)=>setData("item",e.target.value)}
                    disabled={processing}/>
                <PrimaryButton type="submit" className="" disabled={processing}>
                    <i className="fa-solid fa-plus"></i>
                </PrimaryButton>
            </div>
            {errors.item && <InputError message={errors.item}/>}
        </div>
    </form>)
}

export default TodoListCreateForm