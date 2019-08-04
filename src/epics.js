import { combineEpics } from "redux-observable"
import { todoEpic } from "./todo/todo.epic"

export const epics = combineEpics(
    todoEpic,
)
