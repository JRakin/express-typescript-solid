import * as express from 'express'
import { Request, Response } from 'express'
import BaseController from './base.controller'

class BeepController extends BaseController {
    public path = '/beep'
    public router = express.Router()

    constructor() {
        super()
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