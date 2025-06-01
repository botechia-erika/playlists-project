import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    // static guarda em classe e não em instância
    public static TABLE_USERS = "users"; // Define the table name for user data
    
    constructor(){
        super();
    }
}