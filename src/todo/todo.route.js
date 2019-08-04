import React, {
    Fragment,
    memo,
} from "react"

import { TodoListComponent } from "./todo.list.component"

export const TodoRoute = memo(() => (
    <Fragment>
        <TodoListComponent />
    </Fragment>
))

//const useMountEffect = (fun) => useEffect(fun, [])
