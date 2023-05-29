import BaseController from "./BaseController";
import * as express from 'express'
import { Request, Response } from 'express'

class BeepController implements BaseController {
    public path = '/beep'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.beep)
    }

    beep = (req: Request, res: Response) => {
        res.status(200).send('beep')
    }

}

export default BeepController