module.exports = {
    name: "default",
    type: "postgres",
    cache: {
      type: "ioredis",
      options: {
        host: process.env.NODE_ENV == "production"
        ? "book-server-redis.iu8iso.0001.apne1.cache.amazonaws.com"
        : "localhost",
        port: 6379,
      },
    },
    port: 5432,
    // host:
    //   process.env.NODE_ENV == "production"
    //     ? "book-server-db.cpk1ektnfsxd.ap-northeast-1.rds.amazonaws.com"
    //     : "localhost",
    // username: process.env.NODE_ENV == "production" ? "aisdnas2312asdkj" : "mbiuu",
    // password: process.env.NODE_ENV == "production" ? "jayalvarez" : "hoilamgi",
    // database: process.env.NODE_ENV == "production" ? "bookserver" : "book-server",
    host: "creamy-server-db.chhanapibwyh.ap-northeast-1.rds.amazonaws.com",
    username: "mrmbiuzz",
    password: "hoilamgi",
    database: "creamysv",
    synchronize: true,
    logging: true,
    entities:
      process.env.NODE_ENV == "production"
        ? ["dist/entities/*.*"]
        : ["src/entities/*.*"],
  };
  