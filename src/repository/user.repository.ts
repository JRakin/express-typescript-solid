import { EntityManager } from "typeorm";
import { User } from "../entity/user.entity";
import { GenericRepository } from "./base.repository";

export class UserRepositoryImpl extends GenericRepository<User> {
    constructor(entityManager: EntityManager) {
        super(entityManager, User);
    }

    create(entity: User): Promise<User> {
        return
    }


}
