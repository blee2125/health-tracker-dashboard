import React, {useState} from "react";
import {Card} from 'react-bootstrap';
import { connect, useSelector } from "react-redux";
import { useEffect } from "react";
import ExerciseBarGraph from "./GraphComponents/ExerciseBarGraph";
import { getAllExercises } from "../../reducers/exerciseSlice";
import ExerciseGraphSelection from "./GraphComponents/ExerciseGraphSelection";

function ExerciseGraph(props) {
    const userToken = useSelector((state) => state.userState.user.token)
    const exerciseArray = useSelector((state) => state.exerciseState.exerciseArray)
    const [graphSelection, setGraphSelection] = useState('All');

    //array of last 30 dates - graph label
    function thirtyDates() {
        const thirtyDates = []
        const today = new Date();
        for(var i = 29; i > -1; i--) {
            const priorDate = new Date(new Date().setDate(today.getDate() - i));
            const day = priorDate.getDate()
            thirtyDates.push(day)
        }
        return thirtyDates
    }

    //returns new array - all exercises per day
    function matchDataAndDateArrays(inputArray) {
        let ifTrueArray = inputArray.map(w=> w.time.split(' ')[2]*1)
        let datesArray = thirtyDates()
        let returnArray = []
        datesArray.forEach(day => {
            if (ifTrueArray.includes(day)) {
                let results = exerciseArray.filter(w=> w.time.split(' ')[2]*1 === day)
                returnArray.push(results)
            } else {
                returnArray.push(undefined)
            }
        })
        return (returnArray)
    }

    useEffect(() => {
        props.getAllExercises(userToken)
        // eslint-disable-next-line
    }, [])

  return (
    <>
        <Card bg='light' border="secondary" style={{ width: '800px', padding: '25px', margin: "25px"}}>
            <ExerciseGraphSelection graphSelection={graphSelection} setGraphSelection={setGraphSelection}/>
            <ExerciseBarGraph graphLabel={thirtyDates()} dataArray={matchDataAndDateArrays(exerciseArray)} graphSelection={graphSelection}/>
        </Card>
    </>
  )
}

export default connect(null, {getAllExercises}) (ExerciseGraph)