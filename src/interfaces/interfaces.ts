import { ROLES } from "../enums/enums";

/** INTERFCES PARA SERVICES **/

export interface TokenPayload {
  id: string;
  name: string;
  role: ROLES;
}

/** INTERFACES PARA User **/

export interface IUserDB {
  id: string;
  name: string;
  email: string;
  password: string;
  ROLE: ROLES;
  updated_at: string;
  created_at: string;
}

export interface IUserModel {
  id: string;
  name: string;
  email: string;
  role: ROLES;
  updatedAt: string;
  createdAt: string;
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

/** INTERFACES PARA Playlists **/
export interface IPlaylistDB {
  id: string;
  creator_id: string;
  name: string;
  likes: number;
  dislikes: number;
  updated_at: string;
  created_at: string;
}

export interface IPlaylistModel {
  id: string;
  creatorId: string;
  name: string;
  likes: number;
  dislikes: number;
  updated_at: string;
  created_at: string;
}


export interface CreatePlaylistInputDTO {
  name: string;
  // recebe na controller o token do usuário logado - endpóint protegido
  token: string;
}


export interface GetPlaylistsInputDTO {
  // recebe na controller o token do usuário logado - endpóint protegido
  token: string;

}

export interface EditPlaylistInputDTO {
  name: string;
  // recebe na controller o token do usuário logado - endpóint protegido
  token: string;
  idToEdit: string; // path params para editar a playlist
}

export interface DeletePlaylistsInputDTO {
  token: string;
  idToDelete: string; // path params para deletar a playlist
}

/** INTERFACES PARA LikeOrDislikePlaylist **/

export interface ILikeOrDislikePlaylistInputDTO {
  token: string;
  idToLikeOrDislike: string;
  like: boolean;
}