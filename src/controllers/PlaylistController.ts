import { Request, Response } from "express"
import { PlaylistBusiness } from "../business/PlaylistBusiness"
import { PlaylistDatabase } from "../database/PlaylistDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { ZodError } from "zod"
import { UserBusiness } from "../business/UserBusiness"
export class PlaylistController{

    constructor(

          private playlistBusiness: PlaylistBusiness = new PlaylistBusiness(),
        ){}

    }

