import { useState } from "react";

const AddToDo = () => {
  const [addTodo, setAddTodo] =useState("")


  const storeTodo = () => {
    console.log("This is todo going to be added", addTodo)
  }

  return (
    <div className="flex bg-green-100 p-10 justify-center gap-4 items-center">
      <div className="border border-gray-300 w-[50%] rounded-xl">
        <input
          className="w-full outline-none rounded-xl h-12 pl-2"
          type="text"
          name="newtodo"
          placeholder="New to do"
          value={addTodo}
          onChange={(e)=>setAddTodo(e.target.value)}
        />
      </div>
      <div className="bg-green-500 w-20 flex justify-center p-3 rounded-xl text-white cursor-pointer hover:bg-green-400">
        <button onClick={()=>storeTodo()}>Add+</button>
      </div>
    </div>
  );
};

export default AddToDo
