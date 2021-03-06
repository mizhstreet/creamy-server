module.exports = {
  name: "default",
  type: "postgres",
  cache: {
    type: "ioredis",
    options: {
      host:
        process.env.NODE_ENV == "production"
          ? "creamy-server-redis.iu8iso.0001.apne1.cache.amazonaws.com"
          : "localhost",
      port: 6379,
    },
  },
  port: 5432,
  // host:
  //   process.env.NODE_ENV == "production"
  //     ? "creamy-server-db.cpk1ektnfsxd.ap-northeast-1.rds.amazonaws.com"
  //     : "localhost",
  // username: process.env.NODE_ENV == "production" ? "aisdnas2312asdkj" : "mbiuu",
  // password: process.env.NODE_ENV == "production" ? "jayalvarez" : "hoilamgi",
  // database: process.env.NODE_ENV == "production" ? "bookserver" : "creamy-server",
  host: "creamy-server-db.chhanapibwyh.ap-northeast-1.rds.amazonaws.com",
  username: "creamyryodai",
  password: "creamyryodai",
  database: "creamy",
  synchronize: true,
  logging: true,
  entities: process.env.NODE_ENV == "production" ? ["dist/entities/*.*"] : ["src/entities/*.*"],
};
