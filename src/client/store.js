import { ajax } from "rxjs/ajax"
import {
    applyMiddleware,
    compose,
    createStore,
} from "redux"
import { createEpicMiddleware } from "redux-observable"
import { reducers } from "./reducers"
import { epics } from "./epics"

const epicMiddleware = createEpicMiddleware({
    dependencies: {
        ajax,
        getJSON: ajax.getJSON,
    },
})

export const store = ({ preloadedState }) => {
    const composeEnhancers =
        typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                name: "app",
            }) : compose

    const store = createStore(
        reducers,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                epicMiddleware,
            ),
        ),
    )

    epicMiddleware.run(epics)

    return store
}
