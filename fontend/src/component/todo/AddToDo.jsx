const AddToDo = () => {
  return (
    <div className="flex bg-green-100 p-10 justify-center gap-4 items-center">
      <div className="border border-gray-300 w-[50%] rounded-xl">
        <input
          className="w-full outline-none rounded-xl h-12 pl-2"
          type="text"
          name="newtodo"
          placeholder="New to do"
        />
      </div>
      <div className="bg-green-500 w-20 flex justify-center p-3 rounded-xl text-white cursor-pointer hover:bg-green-400">
        <button>Add+</button>
      </div>
    </div>
  );
};

export default AddToDo
