import React from 'react'
import { useSelector } from 'react-redux'
import Weight from '../BodyMetrics/Weight/Weight'
import ExerciseHome from '../Exercise/ExerciseHome'
import FoodHome from '../Food/FoodHome'
import DateFunctions from '../../functions/DateFunctions'
import { Container, Col, Row } from 'react-bootstrap'
import HealthGoalHome from '../HealthGoal/HealthGoalHome'

import ExerciseGraph from '../Exercise/ExerciseGraph'
import WaterHome from '../Water/WaterHome'
import FoodGoalProgress from '../HealthGoal/DisplayComponents/FoodGoalProgress'
import WaterGoalProgress from '../HealthGoal/DisplayComponents/WaterGoalProgress'
import WeightGoalProgress from '../HealthGoal/DisplayComponents/WeightGoalProgress'
import FoodMealData from '../Food/DisplayComponents/FoodMealData'

const HomePage = (props) => {
    const userData = useSelector((state) => state.userState.user)
    const foodTodayArray = useSelector((state) => state.foodState.foodTodayArray)

    const dateStringSplit = DateFunctions.createDateStringSplit()

    return(
        <Container>
            <Row>
            <h1>{dateStringSplit}</h1>
            <p>Welcome {userData.username}</p>
            </Row>
            <Row>
                <Col lg='auto'><FoodGoalProgress /></Col>
                <Col lg='auto'><WaterGoalProgress /></Col>
                <Col lg='auto'><WeightGoalProgress /></Col>
            </Row>
            <Row >
                <Col lg='auto'><Weight /></Col>
                <Col lg='auto'><WaterHome /></Col>
            </Row>
            <Row>
                <FoodMealData foodData={foodTodayArray} />
                <FoodHome />
                <ExerciseGraph />
                <ExerciseHome />
                <HealthGoalHome />
            </Row>
        </Container>
    )
}

export default (HomePage);