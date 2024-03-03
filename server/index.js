const cookieParser = require("cookie-parser")
const express = require("express")
require("dotenv").config()
const cors = require("cors")


const app = express()
app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
require("./dbConnection/connection")
const PORT = process.env.PORT

app.get("/", (req,res) =>{
    res.status(200).json({message:'API is working'})
})

app.use("/api/v1",require("./router/route"))

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})


