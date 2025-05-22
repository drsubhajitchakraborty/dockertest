const redis = require('redis');

const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://redis:6379',
  socket: {
    reconnectStrategy: (retries) => {
      console.log(`🔁 Retry attempt: ${retries}`);
      if (retries > 10) {
        return new Error('Too many retries to connect to Redis');
      }
      return 1000; 
    },
  }
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  try {
    await redisClient.connect();
    console.log('✅ Connected to Redis');
  } catch (err) {
    console.error('❌ Redis connection failed', err);
  }
})();

module.exports = redisClient;
