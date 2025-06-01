import z from "zod";


export const LoginSchema = z.object({
    email: z.string().email("Formato de email inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").max(12, "A senha deve ter no máximo 12 caracteres"),
});