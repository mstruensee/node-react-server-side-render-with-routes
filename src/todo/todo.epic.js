import { setListAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { ofType } from "redux-observable"
import {
    map,
    mergeMap,
} from "rxjs/operators"
import {
    TODO_FETCH,
    TODO_REDUCER
} from "./todo.types"
import { fetchTodos } from "./todos.api"

export const todoEpic = action$ => action$.pipe(
    ofType(TODO_FETCH),
    mergeMap(fetchTodos),
    map(payload => setListAction({
        reducerName: TODO_REDUCER,
        payload,
    }))
)
