const createNewToDo = require("../models/createToDo");

const getAllToDo = async (req, res) => {
    const allToDO = await createNewToDo.find()
    res.status(200).json(allToDO)
  res.status(200).json({ message: "Fetched all todo" });
};

module.exports = { getAllToDo };
