import React from "react"
import Section from "@/Layouts/Section";
import SettingCardHeader from "./SettingCardHeader";
import SettingCardContents from "./SettingCardContents";


const SettingCard = (rateLabelSetting) => {

    const cardItem = rateLabelSetting.rateLabelSetting


    return(<Section>
        <SettingCardHeader cardItem={cardItem}/>
        <SettingCardContents rateLabels={cardItem.rate_settings}/>
    </Section>)
}

export default SettingCard