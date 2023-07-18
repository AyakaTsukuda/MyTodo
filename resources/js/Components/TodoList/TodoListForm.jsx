import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import Select from "../Select";
import Options from "../Options";


const TodoListForm = ({setIsCreateFormShow, rateLabelSettings}) => {

    const {data, setData, post, errors, processing} = useForm({
        title                : "",
        rate_label_setting_id: 1
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        post(route("todolist.store"),{
            onSuccess: ()=>setIsCreateFormShow(false)
        });
    }


    return(<div>
        <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
                <div className="flex-1">
                    <InputLabel value="title" />
                    <TextInput className="w-full" value={data.title} onChange={(e)=>setData("title",e.target.value)}/>
                    {errors.title && <div className="mt-1 text-red-600">{errors.title}</div>}
                </div>
                <div className="flex-1">
                    <InputLabel value="Mark設定" />
                    <Select value={data.rate_label_setting_id} onChange={(e)=>setData("rate_label_setting_id", e.target.value)}>
                        <Options rateLabelSettings={rateLabelSettings} />
                    </Select>
                    {errors.rate_label_setting_id && <div className="mt-1 text-red-600">{errors.rate_label_setting_id}</div>}
                </div>
            </div>
            <div className="mt-4 flex gap-2 justify-center">
                <PrimaryButton type="submit" disabled={processing}>New Todo List Create</PrimaryButton>
            </div>
        </form>
    </div>)
}

export default TodoListForm;