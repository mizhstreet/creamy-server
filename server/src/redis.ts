import * as Redis from "ioredis";

export const redis = new Redis({
  host:
    process.env.NODE_ENV == "production" ? "creamy-server-redis.iu8iso.0001.apne1.cache.amazonaws.com" : "localhost",
  port: 6379,
});
