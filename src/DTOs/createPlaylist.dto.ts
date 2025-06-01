import z from 'zod';


export const CreatePlaylistSchema = z.object({
  name: z.string().min(1, 'Nome da playlist deve ter pelo menos 1 caracteres'),
  token: z.string().min(1, 'Token é obrigatório'), // garante que o token não seja vazio
});


