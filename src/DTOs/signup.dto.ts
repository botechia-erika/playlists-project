// DTOs tem a tipagem de dados que serão enviados ou recebidos pela API
import z from "zod";
import { SignUpInputDTO } from "../interfaces/interfaces";

export const SignUpSchema = z.object({
    name: z.string().min(3, "Nome deverá ter no mínimo 3 caracteres").max(50, "Nome deverá ter no máximo 50 caracteres"),
    email: z.string().email("Formato de email inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").max(12, "A senha deve ter no máximo 12 caracteres"),
}).transform((data) =>  data as SignUpInputDTO);