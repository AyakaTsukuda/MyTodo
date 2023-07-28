import { React } from "react"
import { Head,useForm } from '@inertiajs/react';
import dayjs from "dayjs";
import Layout from '@/Layouts/Layout';
import Display from "@/Layouts/Display";
import Section from "@/Layouts/Section";
import TodoListItem from "@/Components/TodoListShow/TodoListItem";
import TodoListCreateForm from "@/Components/TodoListShow/TodoListCreateForm";
import TodoListPercentDisplay from "@/Components/TodoListShow/TodoListPercentDisplay";
import TodoList from "@/Components/TodoListShow/TodoList";


const Show = ({todo_list, todo_list_items, completed_count, auth, ...props}) => {

    // const TodoListItemLine = todo_list_items.length == 0 
    //     ? <div className="p-2">新しいTodoアイテムは、Createフォームから作成できます。</div> 
    //     : todo_list_items.map((item,index)=>{
    //     return <TodoListItem contents={item} key={index}/>
    // })

    console.log(todo_list, todo_list_items, completed_count);


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
                <div className="pt-6">
                    {/* {TodoListItemLine} */}
                    <TodoList todo_list_items={todo_list_items}/>
                </div>

                {/* Todo List Create Form */}
                <TodoListCreateForm todoList={todo_list}/>
            </Section>

            {/* Percent display */}
            <Section>
                <TodoListPercentDisplay todoList={todo_list} completedCount={completed_count}/>
            </Section>
        </Display>

    </Layout>)
}

export default Show;