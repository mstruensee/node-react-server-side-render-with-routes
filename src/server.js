import fs from "fs"
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { Provider } from "react-redux"
import {
    matchPath,
    StaticRouter
} from "react-router-dom"
import { createStore } from "redux"
import { App } from "./app"
import { reducers } from "./reducers"
import { Routes } from "./routes"

const express = require("express")
const app = express()
const port = 3000

app.use("/", express.static("./dist"))

app.get("*", (req, res) => {
    const currentRoute = Routes.find(route => matchPath(req.url, route)) || {}
    let promise

    if (currentRoute.loadData) {
        promise = currentRoute.loadData()
    } else {
        promise = Promise.resolve(null)
    }

    promise.then(data => {
        const context = {}
        const preloadedState = data ? {
            [ currentRoute.reducerName ]: data
        } : {}
        const store = createStore(reducers, preloadedState)

        const app = ReactDOMServer.renderToString(
            <Provider store={ store }>
                <StaticRouter
                    location={ req.url }
                    context={ context }
                >
                    <App />
                </StaticRouter>
            </Provider>
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
                    `window.__PRELOADED_STATE__ = ${ JSON.stringify(store.getState()) }`
                )
            )
        })
    })
})

//https://github.com/xiaoyunyang/isomorphic-router-demo
//https://flaviocopes.com/react-server-side-rendering/

app.listen(port, () => {
    console.log(`😎 Server is listening on port ${ port }`)
})
