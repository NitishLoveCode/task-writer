const mongoose = require("mongoose");

const signUpNewUser = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique:true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timeStamps: true,
  }
);

const signUpNewUserModule = mongoose.model("user",signUpNewUser)
module.exports = signUpNewUserModule