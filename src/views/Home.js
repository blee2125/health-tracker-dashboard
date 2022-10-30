import React from 'react'
import { useSelector } from 'react-redux'
import WeightHome from '../components/BodyMetrics/Weight/WeightHome'
import ExerciseHome from '../components/Exercise/ExerciseHome'
import FoodHome from '../components/Food/FoodHome'

const HomePage = (props) => {
    const waterState = useSelector((state) => state.waterState)

    const dateString = new Date().toString().split(' ')
    const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

    return(
        <div>
            <h1>{dateStringSplit}</h1>
            <p>Water - Glasses {waterState.glasses === 0 ?  "" : waterState.glasses}</p>
            <WeightHome />
            <ExerciseHome />
            <FoodHome />
        </div>
    )
}

export default (HomePage);