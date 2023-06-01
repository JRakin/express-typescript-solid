import { User } from "@/entity/user.entity";
import { UserRepository } from "@/repository/user.repository";

class UserService {
    private userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepository()
    }

    async createUser(userData: Partial<User>): Promise<User> {
        const user = new User();
        Object.assign(user, userData);
        return this.userRepository.create(user);
    }

}

export default UserService