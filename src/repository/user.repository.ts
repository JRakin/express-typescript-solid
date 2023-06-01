import { GenericRepository } from "./base.repository";
import { User } from "@/entity/user.entity";

export class UserRepository extends GenericRepository<User> {
    constructor() {
        super(User);
    }

    create(entity: User): Promise<User> {
        return
    }


}
