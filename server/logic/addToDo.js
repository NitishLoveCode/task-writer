const createNewToDo = require("../models/createToDo");

const addToto = async (req, res) => {
  const { todoName } = req.body;
  if (!todoName) {
    res.status(400).json({ message: "Bed request" });
  }
  try {
    const creatNewTODo = await createNewToDo.create({
      todoName: todoName,
    });
    res.status(201).json(creatNewTODo);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Internal server error." });
  }
};

module.exports = addToto;
