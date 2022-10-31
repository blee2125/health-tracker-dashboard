import React from 'react'
import { useSelector } from 'react-redux'
import WeightHome from '../components/BodyMetrics/Weight/WeightHome'
import ExerciseHome from '../components/Exercise/ExerciseHome'
import FoodHome from '../components/Food/FoodHome'
import WaterHome from '../components/Water/WaterHome'

const HomePage = (props) => {
    const userData = useSelector((state) => state.userState.user)

    const dateString = new Date().toString().split(' ')
    const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

    return(
        <div>
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