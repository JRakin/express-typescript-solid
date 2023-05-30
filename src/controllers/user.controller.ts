import UserService from "../services/user.service";
import { HttpStatusCode } from "../types/enums";
import BaseController from "./base.controller";
import * as express from "express";

class UserController extends BaseController {
  public path = "users";
  public router = express.Router();
  public userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
    this.initRoutes();
  }

  initRoutes() {
    this.router.post("/create", this.createUser);
  }

  private createUser = async (
    req: express.Request,
    res: express.Response
  ): Promise<void> => {
    const userData = req.body;
    try {
      const createdUser = await this.userService.createUser(userData);
      res.json(createdUser);
    } catch (error) {
      res
        .status(HttpStatusCode.BadRequest)
        .json({ message: "Failed to create user" });
    }
  };
}

export default UserController;
