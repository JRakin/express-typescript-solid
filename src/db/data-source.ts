import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/user.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "juaid",
    password: "",
    database: "e_com",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
