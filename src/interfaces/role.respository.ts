import { Role } from "@/entity/role.entity";
import { IGenericRepository } from "./generic.repository";
import { UserRoles } from "@/types/enums";

interface IRoleRepository extends IGenericRepository<Role> {

    findOneByName(name: UserRoles): Promise<Role>
}

export default IRoleRepository;