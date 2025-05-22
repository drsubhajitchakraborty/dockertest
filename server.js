const express = require('express');
const dbConnect = require('./config/db');
const redisClient = require('./config/redisClient');

const app = express();
const router = express.Router();

require('dotenv').config();

dbConnect();

router.get('/', async (req, res) => {
  try {
    await redisClient.set("key1", "Hello Redis");
    const value = await redisClient.get("key1");
    res.json({ message: "Redis Working", value });
  } catch (error) {
    console.error("Redis error:", error);
    res.status(500).json({ error: "Redis error" });
  }
});

// 👇 ADD THIS LINE
app.use("/", router);

app.listen(process.env.port || 8000, () => {
  console.log(`✅ Server Running Successfully at port ${process.env.port}`);
});
