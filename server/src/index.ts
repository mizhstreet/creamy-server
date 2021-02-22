import "reflect-metadata";
import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import * as AWS from "aws-sdk";
import * as Express from "express";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as cors from "cors";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { redis } from "./redis";
import { context } from "./context";
import { resolvers } from "./resolvers";

const bootstrap = async () => {
  AWS.config.loadFromPath("awsconfig.json");

  await createConnection();

  const schema = await buildSchema({
    resolvers: resolvers as any,
  });

  const apolloServer = new ApolloServer({
    schema,
    context,
    uploads: {
      maxFileSize: 10000000,
      maxFiles: 20,
    },
    introspection: true,
    playground: true,
  });

  const app = Express();

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      origin: (_, cb) => cb(null, true),
      credentials: true,
    }),
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "qid",
      secret: "aslkdfjoiq12312",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    }),
  );

  app.get("/health", (_, res) => {
    res.status(200);
    res.send("OK");
  });

  apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });

  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4001;

  app.listen(PORT, "0.0.0.0", () => {
    console.info(`GraphQL server is listening on ${PORT}`);
  });
};

bootstrap();
