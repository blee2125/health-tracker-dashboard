import React from 'react'
import { useSelector } from 'react-redux'
import Weight from '../BodyMetrics/Weight/Weight'
import ExerciseHome from '../Exercise/ExerciseHome'
import FoodHome from '../Food/FoodHome'
import Water from '../Water/Water'
import DateFunctions from '../../functions/DateFunctions'
import { Container, Col, Row } from 'react-bootstrap'
import HealthGoalHome from '../HealthGoal/HealthGoalHome'

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
                <Col lg='auto'><Water /></Col>
                <Col lg='auto'><Weight /></Col>
            </Row>
            <Row>
                <ExerciseHome />
                <FoodHome />
                <HealthGoalHome />
            </Row>
        </Container>
    )
}

export default (HomePage);