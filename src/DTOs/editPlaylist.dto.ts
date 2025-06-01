import z from 'zod'


export const EditPlaylistSchema = z.object({
  token: z.string().min(1, 'Token é obrigatório'), // garante que o token não seja vazio
  name: z.string().min(1, 'Nome da playlist deve ter pelo menos 1 caracteres'),
  idToEdit: z.string().min(1, 'ID da playlist a ser editada é obrigatório'),
});
