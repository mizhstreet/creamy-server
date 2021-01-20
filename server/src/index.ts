import "reflect-metadata";
// import { ApolloServer } from "apollo-server-express";
// import * as Express from "express";
// import * as session from "express-session";
// import * as cors from "cors";

// import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

let bootstrap = async () => {
  await createConnection();
  console.log("dit me may");
};

bootstrap();
