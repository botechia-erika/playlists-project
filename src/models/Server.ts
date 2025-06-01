import dotenv from "dotenv";
dotenv.config();
const port = Number(process.env.PORT) || 3000;
const MONGOURI= process.env.MONGO_URI
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import mongoose from "mongoose";

/*Esse é o modelo de servidor a ser usado em index*/

export class Server {
  private app: Application;
  private port: number = port; // Corrigir para tipo 'number'

  constructor() {
    mongoose.set("strictQuery", true);
    mongoose
      .connect(
        MONGOURI||"",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as mongoose.ConnectOptions
      )
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err:any) => {
        console.error("Error connecting to MongoDB", err);
      });

    this.app = express();
    this.middlewares();
    this.routes();
    // Não chame listen aqui, pois chamaremos de fora
  }

 middlewares() {
  this.app.use(express.json());
  this.app.use(express.urlencoded({ extended: true }));
  this.app.use(morgan("dev"));
  this.app.use(cors());
 }

  routes() {
    
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
