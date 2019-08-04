import React from "react"
import { hydrate } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { App } from "./app"
import { store } from "./store"

const markup = (
    <Provider store={ store({ preloadedState: window.__PRELOADED_STATE__ }) }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

hydrate(markup, document.getElementById("app"))

