import { baseUrl } from "./services"



export const deleteToDo = async(todoId)=>{
    const response = await fetch(baseUrl+"remove-todo",{
        method:"DELETE",
        credentials:'include',
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify({
            todo:todoId
        })
    })
    return response.status
}