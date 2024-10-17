const express = require('express')

const app = express()

require("dotenv").config();

const cors = require('cors')

const connectDb = require('./config/db')
const userRouter = require('./routes/userRouter')

connectDb()

app.use(cors())
app.use(express.json())
app.use('/user',userRouter)



const port = process.env.port || 4000


app.listen(port,()=>{
    console.log(`server runniing on ${port}`);
    
})