import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// You should move this interface to the User-related file
import { TokenPayload } from "../interfaces/interfaces";

export class TokenManager {
  private JWT_KEY: any;
  private JWT_EXPIRES_IN: any;

  constructor() {
    // Validate environment variables on initialization
    if (!process.env.JWT_KEY || !process.env.JWT_EXPIRES_IN) {
      throw new Error(
        "JWT_KEY or JWT_EXPIRES_IN is not defined in environment variables"
      );
    }

    this.JWT_KEY = process.env.JWT_KEY;
    this.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
  }

  // Creates a new token using the payload
  public createToken = (payload: TokenPayload): any => {
    const token = jwt.sign(payload, this.JWT_KEY, {
      expiresIn: this.JWT_EXPIRES_IN,
    });
    return token;
  };

  // Decodes the token and returns the payload or null if verification fails
  public getPayload = (token: any): any => {
    try {
      const payload = jwt.verify(token, this.JWT_KEY);
      return payload as TokenPayload;
    } catch (error) {
      console.error("Error verifying token:", error); // Log for debugging
      return null;
    }
  };
}
