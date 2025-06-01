import express, {Router} from "express";
import { UserController } from "../controllers/UserController";
import { PlaylistController } from "../controllers/PlaylistController";

export class PlaylistRouter {
    private router: Router;
    private playlistsController: PlaylistController;

    constructor() {
        this.router = Router();
        this.playlistsController = new PlaylistController();
        this.routes();
    }

    private routes() {
       
    }

    public getRouter(): Router {
        return this.router;
    }
}
