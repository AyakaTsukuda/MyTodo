import { React } from "react"
import { Head,useForm } from '@inertiajs/react';
import dayjs from "dayjs";
import Layout from '@/Layouts/Layout';
import Display from "@/Layouts/Display";
import Section from "@/Layouts/Section";
import TodoListItem from "@/Components/TodoListShow/TodoListItem";
import TodoListCreateForm from "@/Components/TodoListShow/TodoListCreateForm";


const Show = ({todo_list, todo_list_items, auth, ...props}) => {

    const TodoListItemLine = !todo_list_items ? "新しいTodoアイテムは、Createフォームから作成できます。" : todo_list_items.map((item,index)=>{
        return <TodoListItem contents={item} key={index}/>
    })


    return(<Layout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{todo_list.title} Show</h2>}
    >
        <Head title="Todo List" />

        <Display>
            <Section>
                {/* header line */}
                <div className="flex justify-between items-end">
                    <div className="">
                        <span>Title</span> <span className="font-bold">{todo_list.title}</span>
                    </div>
                    <div className="flex justify-end gap-2">
                        <div className="text-sm">
                            <span>作成日</span> {dayjs(todo_list.created_at).format("YYYY.MM.DD HH:mm")}
                        </div>
                        <div className="text-sm">
                            <span>更新日</span> {dayjs(todo_list.updated_at).format("YYYY.MM.DD HH:mm")}
                        </div>
                    </div>
                </div>

                {/* Todo List */}
                {TodoListItemLine}

                {/* Create Form */}
                <TodoListCreateForm todoList={todo_list}/>
            </Section>
        </Display>

    </Layout>)
}

export default Show;