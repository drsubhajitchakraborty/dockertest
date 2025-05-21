const express=require('express');
const app=express();
const userRoute=require('./userRoute.js')

app.use('/user',userRoute);