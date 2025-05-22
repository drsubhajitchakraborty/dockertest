const redis = require('redis');

const redisClient = redis.createClient({
  url: 'redis://redis:6379', // use 'redis://redis:6379' when using docker-compose
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;