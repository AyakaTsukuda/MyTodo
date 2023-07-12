import React from "react"
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Page from "@/Layouts/Page";
import TodoListTable from "@/Components/TodoList/TodoListTable";

const Index = ({auth, todoLists}) => {


    return(<Layout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo List</h2>}
    >
        <Head title="Todo List" />

        <Page>
            <TodoListTable todoLists={todoLists} />
        </Page>

    </Layout>)
}

export default Index;