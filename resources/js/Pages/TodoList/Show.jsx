import { React } from "react"
import { Head } from '@inertiajs/react';
import dayjs from "dayjs";
import Layout from '@/Layouts/Layout';
import Display from "@/Layouts/Display";
import Section from "@/Layouts/Section";


const Show = ({todo_list, todo_list_items, auth, ...props}) => {

    return(<Layout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{todo_list.title} Show</h2>}
    >
        <Head title="Todo List" />

        <Display>

            {/* todo list */}
            <Section>
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
            </Section>
        </Display>

    </Layout>)
}

export default Show;