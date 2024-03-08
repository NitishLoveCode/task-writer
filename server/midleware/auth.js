const {verifyToken} = require("../logic/token")


const auth =async(req, res, next) =>{
    const getCokie = req.cookies["token"]
    if(!getCokie){
        res.status(401).json({message:"Unauthorized"})
        return
    }
    const isValidToken = verifyToken(getCokie)
    console.log("is valid token", isValidToken)
    if(!isValidToken){
        res.status(401).json({message:"Unauthorized."})
        return
    }
    req.userId = isValidToken.userId
    next()

    
}

module.exports = auth