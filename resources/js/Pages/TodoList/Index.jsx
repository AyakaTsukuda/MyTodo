import React from "react"
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';


const Index = ({auth}) => {
    return(<Layout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo List</h2>}
    >
        <Head title="Todo List" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    

                    <div className="p-6 text-gray-900">INDEX desu...</div>
                </div>
            </div>
        </div>
    </Layout>)
}

export default Index;