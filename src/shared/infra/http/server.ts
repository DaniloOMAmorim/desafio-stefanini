import "reflect-metadata";
import "express-async-errors";
import "../typeorm";

import "@shared/container";
import express, { Request, Response, NextFunction } from "express";
import { ApolloServer } from "apollo-server-express";

import { AppError } from "@errors/AppError";
import router from "./routes";

import typeDefs from "../graphql/type-defs/quotation"
import resolvers from "../graphql/resolvers/quotation"

async function startServer() {

  const apolloServer = new ApolloServer({typeDefs, resolvers});

  await apolloServer.start()

  const app = express();

  apolloServer.applyMiddleware({app})

  app.use(express.json());

  app.use(router);


  app.use(
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.get('/', (_request: Request, response: Response) => response.json({ msg: 'API desafio backend Stefanini Version:0.1' }));

app.listen(process.env.PORT || 8080, () => console.log("Server is running"));
}

startServer();