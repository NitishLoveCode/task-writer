const signUpNewUserModule = require("../models/signupUser");
const { compairPassword } = require("./bcrypt");
const {generateToken} = require("./token");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Bed request." });
    return;
  }
  try{
    // Finding in dataBase
  const userFind = await signUpNewUserModule.findOne({ email });
  if (!userFind) {
    res.status(404).json({ message: "User not exist." });
    return;
  }
  // compair password
  const isPasswordMatch = await compairPassword(userFind.password, password);
  if (!isPasswordMatch) {
    res.status(401).json({ message: "Unauthorised." });
    return
  }
  res.status(200).cookie("token",generateToken({userId:userFind._id})).json({name:userFind.name, email:userFind.email})
  
  }catch(error){
    console.log(error)
    res.status(500).json({message:"Internal server error"})
  }
};

module.exports = loginUser;
