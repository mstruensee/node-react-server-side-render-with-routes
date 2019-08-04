import { listReducer } from "@wecreatesoftware/redux-higher-order-reducers"
import { combineReducers } from "redux"
import {
    TODO_REDUCER,
    TODO_REDUCER_INITIAL_STATE,
} from "./todo/todo.types"

export const reducers = combineReducers({
    [ TODO_REDUCER ]: listReducer({
        reducerName: TODO_REDUCER,
        initialState: TODO_REDUCER_INITIAL_STATE,
    }),
})
