import express, {Router} from "express";
import { UserController } from "../controllers/UserController";

export class UserRouter {
    private router: Router;
    private userController: UserController;

    constructor() {
       this.router = express.Router();
       this.userController = new UserController();
        this.routes();
    }

    private routes() {
        this.router.post("/sign-up", this.userController.signUp);
        this.router.post("/sign-in", this.userController.signIn);
    }

    public getRouter(): Router {
        return this.router;
    }
}
