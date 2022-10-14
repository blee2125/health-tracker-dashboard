import React from 'react'

import { useSelector } from 'react-redux'

const HomePage = (props) => {
    const waterState = useSelector((state) => state.waterState)

    const dateString = new Date().toString().split(' ')
    const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

    return(
        <div>
            <h1>{dateStringSplit}</h1>

            <p>water - glasses {waterState.glasses === 0 ?  "" : waterState.glasses}</p>
        </div>
    )
}

export default (HomePage);