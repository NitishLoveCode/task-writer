const bcrypt = require("bcrypt");

// hash password
const encryptPassword = async (actualPassword) => {
  return await bcrypt.hash(actualPassword, 10);
};

// compair password
const compairPassword = async (bcryptPass, typedPass) => {
  return await bcrypt.compare(typedPass, bcryptPass)
};
module.exports = { encryptPassword, compairPassword };