import React, { memo } from "react"

export const FourOhFourComponent = memo(({ staticContext = {} }) => {
    staticContext.status = 404
    return <h1>Oops, nothing here!</h1>
})
