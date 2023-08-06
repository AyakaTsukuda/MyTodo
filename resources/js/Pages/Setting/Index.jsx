import { React,useState } from "react"
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Display from "@/Layouts/Display";
import Section from "@/Layouts/Section";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SettingCard from "@/Components/Setting/SettingCard";


const Index = ({auth, rateLabelSettings}) => {

    const card = rateLabelSettings.map((item, index)=>{
        return <SettingCard rateLabelSetting={item} key={index}/>
    })


    return(<Layout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Setting</h2>}
    >
        <Head title="Setting" />

        <Display>
            {card}
        </Display>

    </Layout>)
}

export default Index;