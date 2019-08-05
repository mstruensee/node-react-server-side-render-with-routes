import React, {
    memo,
    useEffect,
} from "react"
import {
    useDispatch,
    useSelector,
} from "react-redux"
import { fetchTodoAction } from "./todo.actions"
import { TodoComponent } from "./todo.component"
import { todoSelector } from "./todo.selectors"
import { TODO_REDUCER_INITIAL_STATE } from "./todo.types"

export const TodoListComponent = memo(() => {
    const todos = useSelector(todoSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        if (todos === TODO_REDUCER_INITIAL_STATE) {
            dispatch(fetchTodoAction())
        }
    }, [])

    return (
        <ul>
            {
                (todos || []).map(todo => (
                        <TodoComponent
                            key={ todo.id }
                            todo={ todo }
                        />
                    ),
                )
            }
        </ul>
    )
})
