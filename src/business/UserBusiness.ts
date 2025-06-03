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


    private async createUser(input: { name: string, email: string, password: string }) {
        const { name, email, password } = input;

        if (!name || !email || !password) {
            throw new Error("Missing input");
        }

        const id = this.idGenerator.generateId();
        const hashedPassword = await this.hashManager.hash(password);

        await this.userDatabase.createUser({
            id,
            name,
            email,
            password: hashedPassword
        });

        const token = this.tokenManager.generateToken({ id });

        return token;
    }
}