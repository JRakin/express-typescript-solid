import { UserRepository } from './../repository/user.repository';
import { User } from "../entity/user.entity";
import { AppDataSource } from '../db/data-source';

class UserService {
    private userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepository(AppDataSource.manager)
    }

    async createUser(userData: Partial<User>): Promise<User> {
        const user = new User();
        Object.assign(user, userData);
        return this.userRepository.create(user);
    }


}

export default UserService