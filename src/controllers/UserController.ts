import { ZodError } from "zod";
import { UserBusiness } from "../business/UserBusiness"
import { Request, Response } from "express";
import { BaseError } from "../errors/BaseError";
import { SignUpSchema } from "../DTOs/signup.dto";
export class UserController {

    constructor(
       private userBusiness = new UserBusiness()
    ){}

    public signUp = async (req:Request, res: Response) => {
      try {
        const input = SignUpSchema.parse({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });


        const token = await this.userBusiness.createUser(input);
        res.status(201).send({
          message: "User created successfully",
          token
        });

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


    public signIn = async (req:Request, res: Response) => {
        try {
         
        }catch (error:any) {
            console.log(error)
           if (error instanceof ZodError) {
               res.status(400).send(error.issues);
           } else if (error instanceof BaseError) {
               res.status(error.statusCode).send({
                   message: error.message,
               });
           } else {
               res.status(500).send({
                   message: "Internal server error"
               });
           }
        }
    }
}
