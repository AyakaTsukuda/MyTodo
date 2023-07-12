import { React,useState } from "react"
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Display from "@/Layouts/Display";
import Section from "@/Layouts/Section";
import TodoListForm from "@/Components/TodoList/TodoListForm";
import TodoListTable from "@/Components/TodoList/TodoListTable";
import PrimaryButton from "@/Components/PrimaryButton";


const Index = ({auth, todoLists}) => {

    const [ isCreateFormShow, setIsCreateFormShow ] = useState(false)


    return(<Layout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo List</h2>}
    >
        <Head title="Todo List" />

        <Display>
            {!isCreateFormShow && <div className="mb-6 flex justify-end">
                <PrimaryButton onClick={()=>setIsCreateFormShow(!isCreateFormShow)}>
                    create
                </PrimaryButton>
            </div>}

            {isCreateFormShow && <Section>
                <TodoListForm setIsCreateFormShow={setIsCreateFormShow} />
            </Section>}

            <Section>
                <TodoListTable todoLists={todoLists} />
            </Section>
        </Display>

    </Layout>)
}

export default Index;