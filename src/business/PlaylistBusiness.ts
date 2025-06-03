import { PlaylistDatabase } from "../database/PlaylistDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
export class PlaylistBusiness {
  

    constructor(
        private playlistDatabase : PlaylistDatabase = new PlaylistDatabase(),
        private idGenerator: IdGenerator = new IdGenerator(),
        private tokenManager: TokenManager = new TokenManager()
    ) {}
}