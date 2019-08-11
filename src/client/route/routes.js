import { HomeRoute } from "../home/home.route"
import { FourOhFourComponent } from "../status/four.oh.four.component"
import { TodoRoute } from "../todo/todo.route"
import { TodoPreloadedState } from "./routes.preloaded.state"

//todo find a better spot for this file ..
export const Routes = [
    {
        path: "/",
        exact: true,
        component: HomeRoute,
    },
    {
        path: "/todos",
        exact: true,
        component: TodoRoute,
        preloadedState: TodoPreloadedState.fetch,
    },
    {
        component: FourOhFourComponent,
    },
]
