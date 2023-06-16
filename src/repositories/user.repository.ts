import { User } from "@/entity/user.entity";
import { BaseRepository } from "./base.repository";
import IUserRepository from "@/interfaces/user.repository";

export class UserRepository extends BaseRepository<User> implements IUserRepository {
    constructor() {
        super(User);
    }

    getAllUsers(): Promise<User[]> {
        return
    }
}
