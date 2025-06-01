import { ROLES } from "../enums/enums";
import { IUserDB, IUserModel } from "../interfaces/interfaces";

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private ROLE: ROLES= ROLES.NORMAL,
    private createdAt: string = new Date().toISOString(),
    private updatedAt: string = new Date().toISOString() 
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getRole(): ROLES {
    return this.ROLE;
  }

  getPassword(): string {
    return this.password;
  }

  getCreatedAt(): Date|unknown {
    return this.createdAt;
  }

  getUpdatedAt(): Date|unknown {
    return this.updatedAt;
  }

  setName(name: string): void {
    this.name = name;
    this.setUpdatedAt();
  }

  setEmail(email: string): void {
    this.email = email;
    this.setUpdatedAt();
  }


  setPassword(password: string): void {
    this.password = password;
    this.setUpdatedAt();
  }

  setRole(role: ROLES): void {
    this.ROLE = role;
    this.setUpdatedAt();
  }

  setUpdatedAt(): void {
    this.updatedAt = new Date().toISOString();
  }

  toUserModel(): IUserModel {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.ROLE,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  toUserDB(): IUserDB {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      ROLE: this.ROLE,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
    };
  }
 
}