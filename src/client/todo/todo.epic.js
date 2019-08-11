import { setListAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { ofType } from "redux-observable"
import {
    map,
    mergeMap,
} from "rxjs/operators"
import {
    TODO_FETCH,
    TODO_REDUCER,
} from "./todo.types"

export const todoEpic = (action$, state$, { getJSON }) => action$.pipe(
    ofType(TODO_FETCH),
    mergeMap(() => getJSON("/api/todo")),
    map(payload => ({
        reducerName: TODO_REDUCER,
        payload,
    })),
    map(setListAction),
)
