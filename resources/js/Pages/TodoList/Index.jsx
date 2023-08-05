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
    const [ isDeleteFormShow, setIsDeleteFormShow ] = useState(false)
    const [ targetDeleteId, setTargetDeleteId ]     = useState(null)

    const handleDeleteCancel = () => {
        setIsDeleteFormShow(!isDeleteFormShow)
        setTargetDeleteId(null)
    }


    return(<Layout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo List</h2>}
    >
        <Head title="Todo List" />

        <Display>
            {/* navigation btn */}
            {!isCreateFormShow && <div className="mb-4 flex justify-end">
                <PrimaryButton onClick={()=>setIsCreateFormShow(!isCreateFormShow)}>
                    create
                </PrimaryButton>
            </div>}

            {/* create form */}
            {isCreateFormShow && <Section>
                <div className="mb-4 flex justify-between gap-2">
                    <div className="font-bold">Todo List Create</div>
                    <SecondaryButton type="button" onClick={()=>setIsCreateFormShow(false)}>Cancel</SecondaryButton>
                </div>
                <TodoListForm setIsCreateFormShow={setIsCreateFormShow} rateLabelSettings={rateLabelSettings} />
            </Section>}

            {/* todo list */}
            <Section>
                <TodoListTable 
                    todoLists={todoLists} 
                    isDeleteFormShow={isDeleteFormShow}
                    setIsDeleteFormShow={setIsDeleteFormShow} 
                    targetDeleteId={targetDeleteId} 
                    setTargetDeleteId={setTargetDeleteId} />
            </Section>

            {/* delete */}
            {!isDeleteFormShow
                ? <SecondaryButton onClick={handleDeleteCancel} className="bg-opacity-20">Delete</SecondaryButton>
                : <SecondaryButton onClick={handleDeleteCancel} className="bg-opacity-20">cancel</SecondaryButton>}
        </Display>

    </Layout>)
}

export default Index;