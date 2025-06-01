import dotenv from "dotenv";
dotenv.config();
const port = Number(process.env.PORT) || 3000;
const MONGOURI= process.env.MONGO_URI
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import mongoose from "mongoose";
import { UserRouter } from "../routes/UserRouter";
import { PlaylistRouter } from "../routes/PlaylistRouter";

export class Server {
  private app: Application;
  private port: number = port; 
  private MONGOURI: string = MONGOURI || ""; 

  private userRouter = new UserRouter();
  private userBasePath :string= "/users"
  private playlistRouter = new PlaylistRouter();
  private playlistBasePath :string= "/playlists"
  constructor() {
    mongoose.set("strictQuery", true);
    mongoose
      .connect(
        MONGOURI as string, // Corrigir para tipo 'string | undefined'
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as mongoose.ConnectOptions
      )
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err: any) => {
        console.error("Error connecting to MongoDB", err);
      });

    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.static(path.join(__dirname, "../public")));
    this.app.use(express.static(path.join(__dirname, "../uploads")));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.userBasePath, this.userRouter.getRouter());
    this.app.use(this.playlistBasePath, this.playlistRouter.getRouter());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
