import UserService from "@/services/user.service";
import BaseController from "./base.controller";
import * as express from "express";
import { ICreateUser, IUser } from "@/interfaces/user.interface";
import { HttpStatusCode } from "@/types/enums";

class UserController extends BaseController {
  public path = "/user";
  public router = express.Router();
  private userService = new UserService();

  constructor() {
    super();
    this.initRoutes();
  }

  initRoutes() {
    this.router.post(this.path + "/create", this.createUser);
  }

  private createUser = async (
    req: express.Request,
    res: express.Response
  ) => {
    const userData: ICreateUser = req.body;
    try {
      const createdUser: IUser = await this.userService.createUser(userData);
      res.send(createdUser);
    } catch (error) {
      res
        .status(HttpStatusCode.BadRequest)
        .json({ message: "Failed to create user" });
    }
  };
}

export default UserController;
