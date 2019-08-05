import { TodoService } from "../../server/todo/todo.service"
import { TODO_REDUCER } from "../todo/todo.types"

//todo find a better spot for this file ..
export class TodoPreloadedState {
    static fetch = () => {
        const todoService = new TodoService()

        return Promise.all([
            todoService.fetchTodo()
        ]).then((
            [
                todos,
            ]
            ) => ({
                [ TODO_REDUCER ]: todos
            })
        )
    }
}
