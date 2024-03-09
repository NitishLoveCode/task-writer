const createNewToDo = require("../models/createToDo");

const getAllToDo = async (req, res) => {
  const allToDO = await createNewToDo.find().sort({ createdAt: -1 });
  res.status(200).json(allToDO);
};

module.exports = { getAllToDo };
