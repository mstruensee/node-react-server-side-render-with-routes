import React, { memo } from "react"
import {
    NavLink,
    Route,
    Switch
} from "react-router-dom"
import { Routes } from "./routes"

export const App = memo(() => (
    <div>{/* todo use Routes.map here? */ }
        <ul>
            <li>
                <NavLink to={ "/" }>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={ "/todos" }>
                    Todos
                </NavLink>
            </li>
        </ul>
        <Switch>
            {
                Routes.map((route, index) => <Route key={ index }{ ...route } />)//todo do not use index for key
            }
        </Switch>
    </div>
))
