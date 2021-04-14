import React from 'react'

const ComponentMultiplyer = ({ Component, count }) => {

    return (
        <React.Fragment>
            {(new Array(count)).fill("").map((val, ind) => <React.Fragment key={ind}> {Component} </React.Fragment>)}
        </React.Fragment>
    )
}

export default ComponentMultiplyer