import { User } from "@/entity/user.entity";
import { IGenericService } from "./generic.service";

interface IUserService extends IGenericService<User> {
    //other custom methods
}

export default IUserService;