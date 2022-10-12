import React from 'react'

import { useSelector } from 'react-redux'

const HomePage = () => {
    const waterState = useSelector((state) => state.waterState)
    
    return(
        <div>
            home page - work in progress
            <p>water - glasses {waterState.glasses}</p>
        </div>
    )
}

export default HomePage;