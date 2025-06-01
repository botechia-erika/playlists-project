import { IPlaylistDB } from "./../interfaces/interfaces";

/**
 * Representa uma playlist.
 */
export class Playlist {
  constructor(
    private readonly id: string,
    private readonly creatorId: string,
    private name: string,
    private likes: number,
    private dislikes: number,
    private updatedAt: string = new Date().toISOString(),
    private readonly createdAt: string = new Date().toISOString()
  ) {}

  /** Retorna o ID da playlist */
  public getId(): string {
    return this.id;
  }

  /** Retorna o ID do criador */
  public getCreatorId(): string {
    return this.creatorId;
  }

  /** Retorna o nome da playlist */
  public getName(): string {
    return this.name;
  }

  /** Atualiza o nome da playlist */
  public setName(name: string): void {
    if (!name.trim()) throw new Error("Nome inválido.");
    this.name = name;
    this.setUpdatedAt(new Date().toISOString());
  }

  /** Retorna o número de likes */
  public getLikes(): number {
    return this.likes;
  }

  /** Atualiza o número de likes */
  public setLikes(likes: number): void {
    if (likes < 0) throw new Error("Likes não pode ser negativo.");
    this.likes = likes;
    this.setUpdatedAt(new Date().toISOString());
  }

  /** Retorna o número de dislikes */
  public getDislikes(): number {
    return this.dislikes;
  }

  /** Atualiza o número de dislikes */
  public setDislikes(dislikes: number): void {
    if (dislikes < 0) throw new Error("Dislikes não pode ser negativo.");
    this.dislikes = dislikes;
    this.setUpdatedAt(new Date().toISOString());
  }

  /** Retorna a data de atualização */
  public getUpdatedAt(): string {
    return this.updatedAt;
  }

  /** Atualiza a data de atualização */
  private setUpdatedAt(updatedAt: string): void {
    this.updatedAt = updatedAt;
  }

  /** Retorna a data de criação */
  public getCreatedAt(): string {
    return this.createdAt;
  }

  /** Converte para o formato do banco de dados */
  public toPlaylistDb(): IPlaylistDB {
    return {
      id: this.id,
      creator_id: this.creatorId,
      name: this.name,
      likes: this.likes,
      dislikes: this.dislikes,
      updated_at: this.updatedAt,
      created_at: this.createdAt,
    };
  }

  /** Cria uma instância de Playlist a partir do banco de dados */
  public static fromDb(playlistDB: IPlaylistDB): Playlist {
    return new Playlist(
      playlistDB.id,
      playlistDB.creator_id,
      playlistDB.name,
      playlistDB.likes,
      playlistDB.dislikes,
      playlistDB.updated_at ? playlistDB.updated_at : new Date().toISOString(),
      playlistDB.created_at ? playlistDB.created_at : new Date().toISOString()
    );
  }
}
