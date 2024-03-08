import React,{createContext, useState} from "react";

const allTodoContext = createContext()

const ContextApi = ({children})=>{
    const [allToDoList, setAllToDoList] = useState([])
    
    return(
        <allTodoContext.Provider value={{allToDoList, setAllToDoList}}>
            {children}
        </allTodoContext.Provider>
    )
}


export {ContextApi, allTodoContext}
