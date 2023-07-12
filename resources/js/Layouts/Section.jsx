import React from "react";


const Section = ({children}) => {
    return(<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
        <div className="p-6 text-gray-900">

            {children}

        </div>
    </div>)
}

export default Section;