import React from "react";


const Display = ({children}) => {

    return(<div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {children}
        </div>
    </div>)
}

export default Display;