import { React,useState } from "react"
import SecondaryButton from "../SecondaryButton";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";


const SettingDelete = ({rateLabelSetting}) => {

    const [ isDeleteMode, setIsDeleteMode ] = useState(false)

    const { delete:destroy, processing } = useForm({
        id: rateLabelSetting.id
    })

    const handleDelete = (e) => {
        e.preventDefault()
        destroy(route("setting.destroy"))
    }


    return(<div className="mt-2">
        {!isDeleteMode && <div>
            <SecondaryButton onClick={()=>setIsDeleteMode(true)}>Delete</SecondaryButton>
        </div>}

        {isDeleteMode && <div className="mt-2 p-2 bg-red-100 rounded-md">
            <div className="float float-right text-gray-600">
                <button>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="pt-1 flex flex-col gap-1 items-center">
                <div className="label">この設定を削除してもよろしいでしょうか？</div>
                <div>
                    <PrimaryButton onClick={handleDelete}>OK</PrimaryButton>
                </div>
            </div>
        </div>}
    </div>)
}

export default SettingDelete