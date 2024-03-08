import { useContext, useState } from "react";
import { baseUrl } from "../../services/services";
import { getAllToDo } from "../../services/GetAllToDo";
import { allTodoContext } from "../context/contextApi";

const AddToDo = () => {
  const [newTodo, setNewTodo] = useState('')

  const {allToDoList, setAllToDoList} = useContext(allTodoContext)


  const addNewTodo = async()=>{
    if(newTodo){
      const responseBack = await fetch(baseUrl+"add-todo",{
        method:"POST",
        credentials:"include",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify({
          todoName:newTodo
        })
      })
    const status = responseBack.json()
    if(responseBack.status === 201){
      setAllToDoList( await getAllToDo())
    }
    }
  }
  return (
    <div className="flex bg-green-100 p-10 justify-center gap-4 items-center">
      <div className="border border-gray-300 w-[50%] rounded-xl">
        <input
          className="w-full outline-none rounded-xl h-12 pl-2"
          type="text"
          name="newtodo"
          placeholder="New to do"
          value={newTodo}
          onChange={(e)=>setNewTodo(e.target.value)}
        />
      </div>
      <div className="bg-green-500 w-20 flex justify-center p-3 rounded-xl text-white cursor-pointer hover:bg-green-400">
        <button onClick={()=> addNewTodo()}>Add+</button>
      </div>
    </div>
  );
};

export default AddToDo
