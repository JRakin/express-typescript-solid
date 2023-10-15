import { BaseService } from "./base.service";
import IRoleService from "@/interfaces/role.service";
import { Role } from "@/entity/role.entity";
import IRoleRepository from "@/interfaces/role.respository";
import { UserRoles } from "@/types/enums";

class RoleService extends BaseService<Role> implements IRoleService {

    constructor(private roleRepo: IRoleRepository) {
        super(roleRepo);
    }

    async findOrCreateDefaultRole(): Promise<Role> {
        const defaultRoleName = UserRoles.USER;
        let defaultRole = await this.roleRepo.findOneByName(defaultRoleName);

        if (!defaultRole) {
            defaultRole = await this.Create({name: defaultRoleName});
        }

        return defaultRole;
    }
}

export default RoleService