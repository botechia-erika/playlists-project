import { ZodError } from "zod";
import { Request, Response } from "express";
import { BaseError } from "../errors/BaseError";
export class MainController {

    constructor(
    ){}

    public getMain = async (req:Request, res: Response) => {
      try {
       res.sendFile("index.html", { root: "build/public" });
      } catch (error: any) {
        console.log(error);
        if (error instanceof ZodError) {
          res.status(400).send(error.issues);
        } else if (error instanceof BaseError) {
          res.status(error.statusCode).send({
            message: error.message,
          });
        } else {
          res.status(500).send({
            message: "Internal server error",
          });
        }
      }
    }
}
