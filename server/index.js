const express =require("express");
const cors=require("cors");
const mongoose = require("mongoose");

const app=express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB connection established")
}).catch((err)=>{
    console.log(err.message);
});

const server =app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(`there is an error in running server ${err}`);
    }
    console.log(`Your server is running at port ${process.env.PORT}`);

});
