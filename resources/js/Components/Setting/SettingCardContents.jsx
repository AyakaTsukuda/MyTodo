import React from "react"


const SettingCardContents = ({rateLabels}) => {

    const settingValues = rateLabels.map((item,index)=>{
        return (<div key={index} className="w-full text-center">
            <div className="border-b pb-2">
                <i className={`${item.mark.class_name} text-xl`}></i>
            </div>
            <div className="pt-2">
                ~ {item.percent} %
            </div>
        </div>)
    })

    return(<div className="mt-4 grid grid-cols-6 place-items-center divide-x">
        {settingValues}
    </div>)
}

export default SettingCardContents