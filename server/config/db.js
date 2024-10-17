const mongoose = require('mongoose')

const connectDb = ()=>{

    mongoose.connect(process.env.CONN_STR).then(()=>{
        console.log("db connected successfully");
        
    }).catch(()=>{
        console.log("db connection failed");
        
    })
}

module.exports =connectDb