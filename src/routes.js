import { FourOhFour } from "./four.oh.four"
import { Home } from "./home"
import { TodoRoute } from "./todo/todo.route"
import { TODO_REDUCER } from "./todo/todo.types"
import { fetchTodos } from "./todo/todos.api"

export const Routes = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        path: "/todos",
        exact: true,
        component: TodoRoute,
        loadData: fetchTodos,
        reducerName: TODO_REDUCER
    },
    {
        component: FourOhFour
    }
]
