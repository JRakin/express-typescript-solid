import { User } from "@/entity/user.entity";
import { UserRepository } from "@/repositories/user.repository";
import { BaseService } from "./base.service";
import IUserService from "@/interfaces/user.service";
import IUserRepository from "@/interfaces/user.repository";
class UserService extends BaseService<User> implements IUserService {

    constructor(private userRepo: IUserRepository) {
        super(userRepo);
    }

    FindAll(): Promise<User[]> {
        return this.repository.FindAll();
    }
}

export default UserService