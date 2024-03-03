const AllToDo = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="flex flex-col justify-center mt-8">
        <div className="flex gap-10 mb-4">
          <div>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
              commodi.
            </h2>
          </div>
          <div>
            <button>Edit</button>
          </div>
          <div>
            <button className="text-red-400">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToDo;
