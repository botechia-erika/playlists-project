import express, {Router} from "express";
import { UserController } from "../controllers/UserController";

export class UserRouter {
    private router: Router;
    private userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.routes();
    }

    private routes() {
       
    }

    public getRouter(): Router {
        return this.router;
    }
}
