const createNewToDo = require("../models/createToDo");

const getAllToDo = async (req, res) => {
  const allToDO = await createNewToDo.find();
  res.status(200).json(allToDO);
};

module.exports = { getAllToDo };
