import express from "express"
import { SPAController } from "./spa/spa.controller"
import { TodoController } from "./todo/todo.controller"
import { Logger } from "./util/logger"
import cors from "cors"

const port = 3000

class Server {
    constructor() {
        this.initialize()
    }

    initialize() {
        const app = express()
        app.use(cors())
        app.use("/", express.static("./dist"))

        new TodoController({ app })

        //last
        new SPAController({ app })

        app.listen(port, () => Logger.info(`😎 Server is listening on port ${ port } ........`))
    }
}

new Server()
