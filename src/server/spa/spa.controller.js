import fs from "fs"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { Provider } from "react-redux"
import {
    matchPath,
    StaticRouter,
} from "react-router-dom"
import { createStore } from "redux"
import { App } from "../../client/app"
import { reducers } from "../../client/reducers"
import { Routes } from "../../client/route/routes"
import { BaseController } from "../config/base.controller"

export class SPAController extends BaseController {
    constructor({ app }) {
        super({ app })
    }

    get routes() {
        return [
            {
                method: "get",
                path: "*",
                function: this.spa,
            },
        ]
    }

    spa(req, res) {
        const currentRoute = Routes.find(route => matchPath(req.url, route)) || {}
        let promise

        if (currentRoute.preloadedState) {
            promise = currentRoute.preloadedState()
        } else {
            promise = Promise.resolve({})
        }

        promise.then(preloadedState => {
            const context = {}

            const store = createStore(reducers, preloadedState)

            const app = ReactDOMServer.renderToString(
                <Provider store={ store }>
                    <StaticRouter
                        location={ req.url }
                        context={ context }
                    >
                        <App />
                    </StaticRouter>
                </Provider>,
            )

            const indexFile = path.resolve("./dist/index.html")
            fs.readFile(indexFile, "utf8", (err, markup) => {
                if (err) {
                    console.error("Something went wrong:", err)
                    return res.status(500).send("Oops, better luck next time!")
                }

                if (context.status === 404) {
                    res.status(404)
                }
                if (context.url) {
                    return res.redirect(301, context.url)
                }

                return res.send(
                    markup
                    .replace("<div id=\"app\"></div>", `<div id="app">${ app }</div>`)
                    .replace(
                        "window.__PRELOADED_STATE__",
                        `window.__PRELOADED_STATE__ = ${ JSON.stringify(store.getState()) }`,
                    ),
                )
            })
        })
    }
}
