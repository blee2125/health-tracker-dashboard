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

const HomePage = (props) => {
    const userData = useSelector((state) => state.userState.user)

    const dateStringSplit = DateFunctions.createDateStringSplit()

    return(
        <Container>
            <Row>
            <h1>{dateStringSplit}</h1>
            <p>Welcome {userData.username}</p>
            </Row>
            <Row >
                <Col lg='auto'><Weight /></Col>
                <Col lg='auto'><WaterHome /></Col>
            </Row>
            <Row>
                
                <FoodHome />
                <ExerciseGraph />
                <ExerciseHome />
                <HealthGoalHome />
            </Row>
        </Container>
    )
}

export default (HomePage);