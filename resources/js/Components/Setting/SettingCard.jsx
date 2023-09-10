import { React,useState } from "react"
import Section from "@/Layouts/Section";
import SettingCardHeader from "./SettingCardHeader";
import SettingCardContents from "./SettingCardContents";
import SettingDelete from "./SettingDelete";
import SettingForm from "./SettingForm";


const SettingCard = (rateLabelSetting) => {

    const [ isEditMode, setIsEditMode ] = useState(false)

    const cardItem = rateLabelSetting.rateLabelSetting
    const canUpdate = (cardItem.id==1 || 0<cardItem.num_of_use) ? false : true

    return(<Section>
        {!isEditMode && <SettingCardHeader cardItem={cardItem} setIsEditMode={setIsEditMode}/>}
        {!isEditMode && <SettingCardContents rateLabels={cardItem.rate_settings}/>}
        {(canUpdate && !isEditMode) && <SettingDelete rateLabelSetting={cardItem}/>}
        {(canUpdate && isEditMode) && <SettingForm setIsFormMode={setIsEditMode} rateLabelSetting={cardItem}/> }
    </Section>)
}

export default SettingCard