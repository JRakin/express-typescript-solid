import { Role } from "@/entity/role.entity";
import { BaseRepository } from "./base.repository";
import IRoleRepository from "@/interfaces/role.respository";
import { UserRoles } from "@/types/enums";

class RoleRepository extends BaseRepository<Role> implements IRoleRepository {
    constructor() {
        super(Role)
    }

    findOneByName(name: UserRoles): Promise<Role> {
        return this.repository.findOne({ where: { name: name } })
    }
}

export default RoleRepository