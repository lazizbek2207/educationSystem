import { createContext, useState } from "react";

export const ContextReciption = createContext();

const ReciptionProvider = ({ children }) => {
    const [reciption, setReciption] = useState(null)
    return (
        <ContextReciption.Provider value={[reciption, setReciption]}>
            {
                children
            }
        </ContextReciption.Provider>
    )
}
export default ReciptionProvider