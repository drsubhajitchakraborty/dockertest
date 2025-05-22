const express=require('express');
const dbConnect=require('./config/db');
const redisClient=require('./config/redisClient');

const app=express();
require('dotenv').config();
//const indexRoute=require('')


dbConnect();

app.get('/', async (req, res) => {
  try {
    await redisClient.set("key1", "Hello Redis");
    const value = await redisClient.get("key1");

    res.json({ message: "Redis Working", value });
  } catch (error) {
    console.error("Redis error:", error);
    res.status(500).json({ error: "Redis error" });
  }
});

app.listen(process.env.port||7000,()=>{
    console.log(`Server Running Sucessfully at port ${process.env.port}`);
})