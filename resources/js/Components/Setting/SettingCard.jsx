import React from "react"
import Section from "@/Layouts/Section";
import SettingCardHeader from "./SettingCardHeader";
import SettingCardContents from "./SettingCardContents";
import SettingDelete from "./SettingDelete";


const SettingCard = (rateLabelSetting) => {

    const cardItem = rateLabelSetting.rateLabelSetting
    const canDelete = (cardItem.id==1 || 0<cardItem.num_of_use) ? false : true

    return(<Section>
        <SettingCardHeader cardItem={cardItem}/>
        <SettingCardContents rateLabels={cardItem.rate_settings}/>
        {canDelete && <SettingDelete rateLabelSetting={cardItem}/>}
    </Section>)
}

export default SettingCard