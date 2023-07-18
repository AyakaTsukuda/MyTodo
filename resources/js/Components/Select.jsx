import React from "react";


const Select = ({className="", children, ...props}) => {
    return(<select
        {...props}
        className={`px-1.5 py-1 border border-gray-300 text-gray-900 rounded-md shadow-sm
            focus:ring-blue-500 focus:border-blue-500 block w-full ${className}`}
        >
        {children}
    </select>)
}

export default Select;