import { createContext } from "react";

export const NewsContext = createContext();

const Context = ({children})=>{
    return <Context.Provider>{children}</Context.Provider>
};

export default Context;