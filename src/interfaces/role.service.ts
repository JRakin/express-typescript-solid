import { Role } from "@/entity/role.entity";
import { IGenericService } from "./generic.service";

interface IRoleService extends IGenericService<Role> {
    findOrCreateDefaultRole(): Promise<Role>

}

export default IRoleService