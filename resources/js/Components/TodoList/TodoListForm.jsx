import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import Select from "../Select";


const TodoListForm = ({setIsCreateFormShow, rateLabelSettings}) => {

    const {data, setData, post, errors, processing} = useForm({
        title: "",
        rate_label_setting_id : 1
    })

    const handleSubmit = (e) => {
        // @todo
    }


    return(<div>
        <form onSubmit={handleSubmit}>
            <div className="inline-block mr-2 w-3/5">
                <InputLabel value="title" />
                <TextInput className="w-full" value={data.title} onChange={(e)=>setData("title",e.target.value)}/>
            </div>
            <div className="inline-block w-[calc(40%_-_0.5rem)]">
                <InputLabel value="Mark設定" />
                <Select className="w-full"/> {/* @todo: 中身のデータ正しくする & デザインがダサい。 */}
            </div>
            <div className="mt-4 flex gap-2 justify-center">
                <SecondaryButton type="button" onClick={()=>setIsCreateFormShow(false)}>Cancel</SecondaryButton>
                <PrimaryButton>New Todo List Create</PrimaryButton>
            </div>
        </form>
    </div>)
}

export default TodoListForm;