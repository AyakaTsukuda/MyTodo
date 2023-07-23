import React from "react"


const TodoListItem = ({contents}) => {


    return(<div className="py-2">
        <div className="flex gap-2 items-center">
            {/* checkbox */}
            <div className="flex gap-1 w-full">
                <a href={route("todolistitem.update", contents.id)}
                    className={`px-1 text-white rounded-md border border-gray-300 focus:bg-gray-900 ${contents.checked==0 ? "" : "bg-gray-600"} `}>
                    <i className="fa-solid fa-check"></i>
                </a>
                <div className="w-full">{contents.item}</div>
            </div>

            <button className="text-gray-600">
                <i className="fa-solid fa-pen-to-square fa-xl"></i>
            </button>
            <button className="text-gray-600">
                <i className="fa-solid fa-trash-can fa-xl"></i>
            </button>
        </div>
    </div>)
}

export default TodoListItem