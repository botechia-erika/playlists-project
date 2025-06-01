import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { UserDatabase } from "./../database/UserDatabase";
export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase = new UserDatabase(),
        private idGenerator: IdGenerator = new IdGenerator(),
        private tokenManager: TokenManager = new TokenManager(),
        private hashManager: HashManager = new HashManager()

    ){}
}