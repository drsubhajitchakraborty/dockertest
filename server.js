const express=require('express');
const dbConnect=require('./config/db');
const app=express();
require('dotenv').config();
//const indexRoute=require('')


dbConnect();


app.listen(process.env.port||7000,()=>{
    console.log(`Server Running Sucessfully at port ${process.env.port}`);
    
})