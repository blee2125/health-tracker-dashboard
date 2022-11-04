import React from 'react'
import { useSelector } from 'react-redux'
import Weight from '../BodyMetrics/Weight/Weight'
import ExerciseHome from '../Exercise/ExerciseHome'
import FoodHome from '../Food/FoodHome'
import Water from '../Water/Water'
import DateFunctions from '../../functions/DateFunctions'

const HomePage = (props) => {
    const userData = useSelector((state) => state.userState.user)

    const dateStringSplit = DateFunctions.createDateStringSplit()

    return(
        <div  style={{'display': 'inline-block'}}>
            <h1>{dateStringSplit}</h1>
            <p>Welcome {userData.username}</p>
            
            <div style={{'display': 'inline-flex'}}>
                <Water />
                <Weight />
            </div>
            <ExerciseHome />
            <FoodHome />
        </div>
    )
}

export default (HomePage);