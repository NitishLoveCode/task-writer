const express = require("express");
const { signUpNewUser } = require("../logic/signup");
const loginUser = require("../logic/login");
const auth = require("../midleware/auth");
const { getAllToDo } = require("../logic/gitAllToDo");
const addToto = require("../logic/addToDo");
const validAuth = require("../logic/validAuth");
const removeTodo = require("../logic/removeTodo");

const routers = express.Router();

//@Des: This is signup for new user
//@API: /api/v1/signup-user
routers.route("/signup-user").post(signUpNewUser);

//@Des: For login user
//@API: /api/v1/login-user
routers.route("/login-user").post(loginUser);

//@Des: This is home page
//@API: /api/v1/get-all-todo
routers.route("/get-all-todo").get(auth, getAllToDo);

//@Des: Create new todo
//@API: /api/v1/add-todo
routers.route("/add-todo").post(auth, addToto);

//@Des: remove Tdo
//@API: /api/v1/remove-todo
routers.route("/remove-todo").delete(auth,removeTodo);

//@Des: Cheack if use has valid cookies or not if not redirect ot login page
//@API: /api/v1/validAuth
routers.route("/validAuth").get(auth, validAuth);

module.exports = routers;
