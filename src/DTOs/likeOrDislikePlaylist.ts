import z from 'zod';




export const LikeOrDislikePlaylistSchema = z.object({
  token: z.string().min(1, 'Token é obrigatório'), // garante que o token não seja vazio
  playlistId: z.string().min(1, 'ID da playlist a ser curtida ou descurtida é obrigatório'),
  like: z.boolean(), // true para curtir, false para descurtir
});