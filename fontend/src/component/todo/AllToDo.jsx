import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../services/services";
import { deleteToDo } from "../../services/DeleteTodo";
import { getAllToDo } from "../../services/GetAllToDo";
import { allTodoContext } from "../context/contextApi";

const AllToDo = () => {

  const {allToDoList, setAllToDoList} = useContext(allTodoContext)

 const getAllTodo = async () => {
    const allData = await getAllToDo()
    console.log("888fdsafsaffffffffffffff",allData)
    setAllToDoList(allData);
  };

  const delteSingleTodo = async (todoId) => {
    const response = await deleteToDo(todoId);
    if (response === 200) {
      getAllTodo();
    }
  };


  useEffect(() => {
    getAllTodo();
  }, []);

  return (
    <div className="flex justify-center gap-10 mb-10">
      <div className="flex flex-col justify-center mt-8">
        {allToDoList.map((currentElement) => {
          return (
            <div key={currentElement._id} className="flex gap-10 mb-4">
              <div>
                <h2>{currentElement?.todoName}</h2>
              </div>
              <div>
                <button>Edit</button>
              </div>
              <div>
                <button
                  onClick={() => delteSingleTodo(currentElement._id)}
                  className="text-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllToDo;
