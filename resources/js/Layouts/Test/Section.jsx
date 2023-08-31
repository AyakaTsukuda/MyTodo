import React from "react"
import { LevelContext } from "@/Components/Test/LevelContext"


const Section = ({ level, children, className="" }) => {

    return(<section className="py-8 px-4">
        <div className={`p-4 border border-cyan-400 bg-cyan-900 rounded-2xl font-bold text-white ${className}`}>
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </div>
    </section>)
}

export default Section