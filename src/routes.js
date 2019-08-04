import { FourOhFourComponent } from "./status/four.oh.four.component"
import { HomeRoute } from "./home/home.route"
import { TodoRoute } from "./todo/todo.route"
import { TODO_REDUCER } from "./todo/todo.types"
import { fetchTodos } from "./todo/todos.api"

//todo find a spot for this file ..
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
        loadData: fetchTodos,
        reducerName: TODO_REDUCER,
    },
    {
        component: FourOhFourComponent,
    },
]
