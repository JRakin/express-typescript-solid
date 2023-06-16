import { User } from "@/entity/user.entity";
import { IGenericRepository } from "./generic.repository";

interface IUserRepository extends IGenericRepository<User> {
  // other methods

  getAllUsers(): Promise<User[]>
}

export default IUserRepository;