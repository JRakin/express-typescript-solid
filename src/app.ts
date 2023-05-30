import { Application } from 'express';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import { AppDataSource } from './db/data-source';
import * as chalk from 'chalk';
import helmet from "helmet";
import BeepController from './controllers/beep.controller';
import UserController from './controllers/user.controller';

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number, middleWares: any[], controllers: any[] }) {
        this.app = express()
        this.port = appInit.port
        this.initDatabase()
        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        });
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/api/v1', controller.router)
        })
    }

    private initDatabase() {
        AppDataSource.initialize()
            .then(() => {
                console.log(chalk.bgBlue.bold("Database has been initialized! 😁"));
            })
            .catch((err) => {
                console.error("Error during Database initialization:", err);
            });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(chalk.greenBright.bgGray(`⚡️Server listening on the http://localhost:${this.port} ⚡️`))
        })
    }
}


export default new App({
    port: 8000,
    controllers: [
        new BeepController(),
        new UserController()
    ],
    middleWares: [
        express.json(),
        express.urlencoded({ extended: true }),
        cors(),
        helmet(),
        morgan('common'),
        cookieParser()
    ]
})