import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";

import "../typeorm";
import "@shared/container";
import { AppError } from "@errors/AppError";

import router from "./routes";

const app = express();

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