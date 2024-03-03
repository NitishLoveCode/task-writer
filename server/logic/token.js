const jwt = require("jsonwebtoken")

// Generate token
const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT,{expiresIn:'1d'})
};

// Verify token
const verifyToken =(token)=>{
    return jwt.verify(token, process.env.JWT)
}

module.exports = {generateToken, verifyToken}
