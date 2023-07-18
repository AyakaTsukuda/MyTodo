import { React,useState } from "react"
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Display from "@/Layouts/Display";
import Section from "@/Layouts/Section";
import TodoListForm from "@/Components/TodoList/TodoListForm";
import TodoListTable from "@/Components/TodoList/TodoListTable";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";


const Index = ({auth, todoLists, rateLabelSettings}) => {

    const [ isCreateFormShow, setIsCreateFormShow ] = useState(false)


    return(<Layout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo List</h2>}
    >
        <Head title="Todo List" />

        <Display>
            {!isCreateFormShow && <div className="mb-4 flex justify-end">
                <PrimaryButton onClick={()=>setIsCreateFormShow(!isCreateFormShow)}>
                    create
                </PrimaryButton>
            </div>}

            {isCreateFormShow && <Section>
                <div className="mb-4 flex justify-between gap-2">
                    <div className="font-bold">Todo List Create</div>
                    <SecondaryButton type="button" onClick={()=>setIsCreateFormShow(false)}>Cancel</SecondaryButton>
                </div>
                <TodoListForm setIsCreateFormShow={setIsCreateFormShow} rateLabelSettings={rateLabelSettings} />
            </Section>}

            <Section>
                <TodoListTable todoLists={todoLists} />
            </Section>
        </Display>

    </Layout>)
}

export default Index;