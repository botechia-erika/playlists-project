import z from 'zod'


export const DeletePlaylistSchema = z.object({
    token: z.string().min(1, 'Token é obrigatório'), // garante que o token não seja vazio
    idToDelete: z.string().min(1, 'ID da playlist a ser deletada é obrigatório'),
});