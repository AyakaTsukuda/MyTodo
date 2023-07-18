import React from "react"


const Options = ({rateLabelSettings, className="", ...props}) => {

    const optionList = rateLabelSettings.map((item, index)=>{
        return <option value={item.id} key={index}>{item.label_name}</option> 
    })


    return optionList
}

export default Options