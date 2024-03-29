import { React,useState,useContext } from "react"
import { Marks } from "@/Pages/Setting/Index"
import { useForm } from "@inertiajs/react"
import TextInput from "../TextInput"
import PrimaryButton from "../PrimaryButton"
import InputError from "../InputError"


const SettingForm = ({setIsFormMode=false, setIsEditMode=false, rateLabelSetting=null}) => {

    const marks = useContext(Marks)

    const defaultPercents = marks.reduce((result,mark,index)=>{
        let setupPercent   = !rateLabelSetting ? 0 : rateLabelSetting.rate_settings[index].percent
        let defaultPercent = index==5 ? 100 : setupPercent
        result[index] = {mark_id:mark.id, percent:defaultPercent}
        return result
    },[])

    const defaultLabel = !rateLabelSetting ? "" : rateLabelSetting.label_name
    const defaultId    = !rateLabelSetting ? "" : rateLabelSetting.id   

    const { data, setData, processing, errors, post, put } = useForm({
        rate_label_setting_id : defaultId,
        percents              : defaultPercents,
        label                 : defaultLabel
    })

    const handlePercentOnChange = (e,index) => {
        const targetValue = (100 < e.target.value || e.target.value < 0) ? 0 : e.target.value
        const newPercents = {...data.percents}
        newPercents[index].percent = targetValue
        setData("percents", newPercents)

        e.target.classList.remove("bg-red-100")
        if(document.querySelector(".bg-red-100")==null) setIsSubmitDisabled(false)
    } 

    const [ isSubmitDisabled, setIsSubmitDisabled ] = useState(false)

    const rateValueCheck = () => {
        const inputList = {...data.percents}
        let errorCount = 0
        Object.keys(inputList).forEach((key) => {
            if(key!=0 && inputList[key].percent<=inputList[key-1].percent){
                document.getElementById("percent_"+key).classList.add("bg-red-100")
                errorCount ++
                setIsSubmitDisabled(true)
            }
        })
        return 0 < errorCount ? false : true 
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if(rateValueCheck()){
            if(!rateLabelSetting){
                post(route("setting.store"),{
                    onSuccess: ()=>{!setIsFormMode(false)}
                })
            } else {
                put(route("setting.update"),{
                    onSuccess: ()=>{!setIsFormMode(false)}
                })
            }
        }
    }


    const settingValues = marks.map((item,index)=>{
        return (<div key={index} className="w-full text-center">
            <div className="border-b pb-2">
                <i className={`${item.class_name} text-xl`}></i>
            </div>
            <div className="pt-2 flex gap-1 items-center justify-center">
                <div>~</div>
                {index<5 
                    ? <TextInput
                        id={"percent_"+index} 
                        className="w-16 text-end" 
                        type="number"
                        min={0}
                        max={100} 
                        value={data.percents[index].percent} 
                        onChange={(e)=>handlePercentOnChange(e,index)}/>
                    : <div className="py-1 border border-white">100</div>} 
                <div>%</div>
            </div>
        </div>)
    })


    return(<div>
        <form id="form" onSubmit={handleSubmit}>
            <div className="flex justify-between items-start">
                <div className="w-1/2 flex flex-col">
                    <div className="pt-2 label">ラベル</div>
                    <TextInput className="w-full" type="text" value={data.label} onChange={(e)=>{setData("label", e.target.value)}} />
                    <InputError message={errors.label}/>
                </div>

                <button onClick={()=>{!setIsCreateMode ? setIsEditMode(false) : setIsCreateMode(false)}}>
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>
            </div>

            <div className="mt-6 grid grid-cols-6 place-items-center divide-x">
                {settingValues}
                <InputError message={errors.percents}/>
            </div>

            <div className="mt-6 flex justify-center">
                <PrimaryButton type="submit" disabled={processing||isSubmitDisabled}>{!rateLabelSetting ? "New Create" : "Edit"}</PrimaryButton>
            </div>
        </form>
    </div>)
}

export default SettingForm