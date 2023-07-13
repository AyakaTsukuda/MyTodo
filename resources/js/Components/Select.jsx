import React from "react";


const Select = ({className=""}) => {
    return(<select id="countries" 
        className={`px-1.5 py-1 border border-gray-300 text-gray-900 rounded-md shadow-sm
            focus:ring-blue-500 focus:border-blue-500 block w-full ${className}`}>
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select>)
}

export default Select;