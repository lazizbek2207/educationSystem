import { createContext, useState } from "react";

export const ContextToggle = createContext();



const ContextToggleProvider = ({ children }) => {
    const [toggle,setToggle] = useState(true)
    return (
        <ContextToggle.Provider value={[toggle,setToggle]}>
            {
                children
            }
        </ContextToggle.Provider>
    )
}

export default ContextToggleProvider;