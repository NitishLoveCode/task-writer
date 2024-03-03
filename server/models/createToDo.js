const mongoose = require("mongoose");

const createNewToDoSchema = mongoose.Schema(
  {
    todoName: {
      type: String,
      required: [true, "ToDo name is required."],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const createNewToDo = mongoose.model("allToDo", createNewToDoSchema);
module.exports = createNewToDo;
