import React, { memo } from "react"

export const FourOhFour = memo(({ staticContext = {} }) => {
    staticContext.status = 404
    return <h1>Oops, nothing here!</h1>
})
