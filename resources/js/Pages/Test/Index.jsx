import React from "react"
import Section from "@/Layouts/Test/Section"
import Heading from "@/Components/Test/Heading"


const Index = () => {
    return(<div className="h-screen bg-black">
        <Section level={1}>
            <Heading>Title</Heading>

            <Section level={2}>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>

                <Section level={3}>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>

                        <Section level={4}>
                            <Heading>Sub-sub-heading</Heading>
                            <Heading>Sub-sub-heading</Heading>
                            <Heading>Sub-sub-heading</Heading>
                        </Section>
                </Section>
            </Section>
        </Section>
    </div>)
}

export default Index