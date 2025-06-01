import { PlaylistBusiness } from "../business/PlaylistBusiness"
import { PlaylistDatabase } from "../database/PlaylistDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"

export class PlaylistController{

    constructor(
        private playlistBusiness: PlaylistBusiness = new PlaylistBusiness(
            new PlaylistDatabase(),
            new IdGenerator(),
            new TokenManager()
        )
    ){}
}