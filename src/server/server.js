import express from "express"
import { SPAController } from "./spa/spa.controller"
import { TodoController } from "./todo/todo.controller"
import { Logger } from "./util/logger"
import cors from "cors"
import morgan from 'morgan'

const port = 3000

class Server {
    constructor() {
        this.initialize()
    }

    initialize() {
        const app = express()
        app.use(cors())
        app.use(morgan('[INFO] [:date[clf]] :method :url :status :res[content-length] - :response-time ms'))
        app.use("/static", express.static("./dist/static"))

        new TodoController({ app })

        //last
        new SPAController({ app })

        app.listen(port, () => Logger.info(`😎 Server is listening on port ${ port }`))
    }
}

new Server()
