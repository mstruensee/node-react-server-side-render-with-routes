import React, { memo } from "react"

export const TodoComponent = memo(({ todo: { title } }) => (
    <li>
        { title }
    </li>
))
