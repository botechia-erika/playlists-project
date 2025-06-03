import express, {Router} from "express";
import { UserController } from "../controllers/UserController";
import { PlaylistController } from "../controllers/PlaylistController";
import { MainController } from "../controllers/MainController";

export class MainRouter {
  private router: Router;
  private mainController: MainController = new MainController();

  constructor() {
    this.mainController = new MainController();
    this.router = Router();

    this.routes();
  }

  private routes() {
    this.router.get("/", this.mainController.getMain);
  }

  public getRouter(): Router {
    return this.router;
  }
}
