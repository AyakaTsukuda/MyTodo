import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";


const TodoListForm = ({setIsCreateFormShow}) => {

    const {data, setData, post, errors, processing} = useForm({
        title: "",
    })

    const handleSubmit = (e) => {
        // @todo
    }


    return(<div>
        <form onSubmit={handleSubmit}>
            <div>
                <InputLabel value="title" />
                <TextInput className="w-full" value={data.title} onChange={(e)=>setData("title",e.target.value)}/>
            </div>
            <div className="mt-2 flex gap-2 justify-center">
                <SecondaryButton type="button" onClick={()=>setIsCreateFormShow(false)}>Cancel</SecondaryButton>
                <PrimaryButton>New Todo List Create</PrimaryButton>
            </div>
        </form>
    </div>)
}

export default TodoListForm;