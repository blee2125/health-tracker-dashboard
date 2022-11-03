import React from 'react'
import { useSelector } from 'react-redux'
import WeightHome from '../BodyMetrics/Weight/WeightHome'
import ExerciseHome from '../Exercise/ExerciseHome'
import FoodHome from '../Food/FoodHome'
import WaterHome from '../Water/WaterHome'
import DateFunctions from '../../functions/DateFunctions'

const HomePage = (props) => {
    const userData = useSelector((state) => state.userState.user)

    const dateStringSplit = DateFunctions.createDateStringSplit()

    return(
        <div  style={{'display': 'inline-block'}}>
            <h1>{dateStringSplit}</h1>
            <p>Welcome {userData.username}</p>
            
            <div style={{'display': 'inline-flex'}}>
                <WaterHome />
                <WeightHome />
            </div>
            <ExerciseHome />
            <FoodHome />
        </div>
    )
}

export default (HomePage);