const signUpNewUserModel = require("../models/signupUser");
const { encryptPassword } = require("./bcrypt");
const {generateToken} = require("./token");

const signUpNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "Bed request" });
    return;
  }
  // User exist or not check
  const userFind = await signUpNewUserModel.findOne({ email });
  if (userFind) {
    res.status(409).json({ message: "User already exist" });
    return;
  }
  //ancrypted password
  const ancryptedPassword = await encryptPassword(password);
  try{
    // create new user
  const addNewUser = await signUpNewUserModel.create({
    name,
    email,
    password: ancryptedPassword,
  });
  if (addNewUser) {
    res.status(201).cookie("token",generateToken({"userId":addNewUser._id})).json({name:addNewUser.name, email:addNewUser.email});
    return
  }
  }catch(error){
    res.status(500).json({message:"Internal server error."})
    console.log(error)
    return
  }
};

module.exports = { signUpNewUser };
