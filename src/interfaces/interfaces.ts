import { ROLES } from "../enums/enums";
export interface TokenPayload {
  id: string;
  name: string;
  role: ROLES;
}

export interface IUserDB {
  id: string;
  name: string;
  email: string;
  password: string;
  ROLE: ROLES;
  createdAt: Date | unknown;
  updatedAt: Date | unknown;
}

export interface IUserModel {
  id: string;
  name: string;
  email: string;
  role: ROLES;
  createdAt: Date|unknown;
  updatedAt: Date|unknown;
}

export interface SignUpInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface SignUpOutputDTO {
  token: string;
}
export interface LoginInputDTO {
  email: string;
  password: string;
}
export interface LoginOutputDTO {
  token: string;
}