import { React,useState } from "react"
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Display from "@/Layouts/Display";
import PrimaryButton from "@/Components/PrimaryButton";
import SettingCard from "@/Components/Setting/SettingCard";
import SettingForm from "@/Components/Setting/SettingForm";
import Section from "@/Layouts/Section";


const Index = ({auth, rateLabelSettings, marks}) => {

    const cardList = rateLabelSettings.map((item, index)=>{
        return <SettingCard rateLabelSetting={item} key={index}/>
    })

    const [ isCreateMode, setIsCreateMode ] = useState(false)


    return(<Layout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Setting</h2>}>
        <Head title="Setting" />

        <Display>
            {!isCreateMode && <div className="mb-4 flex justify-end">
                <PrimaryButton onClick={()=>setIsCreateMode(true)}>Create</PrimaryButton>
            </div>}

            {isCreateMode && <Section>
                <SettingForm setIsCreateMode={setIsCreateMode} marks={marks}/>
            </Section>}

            {cardList}
        </Display>

    </Layout>)
}

export default Index;