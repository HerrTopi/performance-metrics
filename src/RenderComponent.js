import React from 'react'

const RenderComponent = ({ children, count }) => {

    return (
        <React.Fragment>
            {(new Array(count)).fill("").map((val, ind) => <React.Fragment key={ind}>{children}</React.Fragment>)}
        </React.Fragment>
    )
}

export default RenderComponent