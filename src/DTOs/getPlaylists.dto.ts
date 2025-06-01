import z from 'zod'


export const GetPlaylistSchema = z.object({
  token: z.string().min(1, 'Token é obrigatório'), // garante que o token não seja vazio
});


