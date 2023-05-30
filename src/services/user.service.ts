import { UserRepositoryImpl } from './../repository/user.repository';
import { User } from "../entity/user.entity";
import { AppDataSource } from '../db/data-source';

class UserService {
    private userRepository: UserRepositoryImpl
    constructor() {
        this.userRepository = new UserRepositoryImpl(AppDataSource.manager)
    }

    async createUser(userData: Partial<User>): Promise<User> {
        const user = new User();
        Object.assign(user, userData);
        return this.userRepository.create(user);
    }


}

export default UserService