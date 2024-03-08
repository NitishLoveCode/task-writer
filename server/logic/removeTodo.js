const mongooseData = require("../models/createToDo")

const removeTodo = async(req,res) =>{
    const {todo} = req.body
    if(!todo){
        res.status(401).json({status:"Unauthorized."})
        return
    }
    const isAvlable = await mongooseData.find({_id:todo})
    if(!isAvlable){
        res.status(404).json({status:"404 Not found."})
        return
    }
    const isdeleted = await mongooseData.findOneAndDelete({_id:todo})
    console.log(isdeleted)
    res.status(200).json(isdeleted)

}

module.exports = removeTodo