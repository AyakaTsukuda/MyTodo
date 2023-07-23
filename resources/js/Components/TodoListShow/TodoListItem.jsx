import React from "react"
import { useForm } from "@inertiajs/react"


const TodoListItem = ({contents}) => {


    return(<div>{contents.item}</div>)
}

export default TodoListItem