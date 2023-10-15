import UserService from "@/services/user.service";
import BaseController from "./base.controller";
import * as express from "express";
import { HttpStatusCode } from "@/types/enums";
import UserRepository from "@/repositories/user.repository";

class UserController extends BaseController {
  public path = "/user";
  public router = express.Router();
  private userService = new UserService(new UserRepository());

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
    const userData = req.body;
    try {
      const createdUser = await this.userService.Create(userData);
      res.send(createdUser);
    } catch (error) {
      res
        .status(HttpStatusCode.BadRequest)
        .json({ message: "Failed to create user" });
    }
  };
}

export default UserController;
