import { Logger } from "../util/logger"

export class BaseController {
    constructor({ app }) {
        this.app = app
        this.registerRoutes()
    }

    get routes() {
        return []
    }

    registerRoutes() {
        this.routes.forEach(({ method, path, function: cb }) => {
            this.app[ method ](path, cb.bind(this))
            Logger.info(`Registered route: [${ method.toUpperCase() }] - "${ path }" -> ${ this.constructor.name }.${ cb.name }`)
        })
    }
}
