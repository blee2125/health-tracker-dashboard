import React, {useState} from "react";
import {Card} from 'react-bootstrap';
import { connect, useSelector } from "react-redux";
import { useEffect } from "react";
import FoodBarGraph from "./GraphComponents/FoodBarGraph";
import FoodBarGraphSelection from "./GraphComponents/FoodBarGraphSelection";
import { getAllFood } from "../../reducers/foodSlice";

function FoodGraph(props) {
    const userToken = useSelector((state) => state.userState.user.token)
    const foodArray = useSelector((state) => state.foodState.foodArray)
    const [graphSelection, setGraphSelection] = useState('Weight');

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

    //returns new array - all food per day
    function matchDataAndDateArrays(inputArray) {
        let ifTrueArray = inputArray.map(w=> w.time.split(' ')[2]*1)
        let datesArray = thirtyDates()
        let returnArray = []
        datesArray.forEach(day => {
            if (ifTrueArray.includes(day)) {
                let results = foodArray.filter(w=> w.time.split(' ')[2]*1 === day)
                returnArray.push(results)
            } else {
                returnArray.push(undefined)
            }
        })
        return (returnArray)
    }

    useEffect(() => {
        props.getAllFood(userToken)
        // eslint-disable-next-line
    }, [])

  return (
    <>
        <FoodBarGraphSelection graphSelection={graphSelection} setGraphSelection={setGraphSelection}/>
        <Card bg='light' border="secondary" style={{ width: '800px', padding: '25px', margin: "25px"}}>
            <FoodBarGraph graphLabel={thirtyDates()} dataArray={matchDataAndDateArrays(foodArray)} />
        </Card>
    </>
  )
}

export default connect(null, {getAllFood}) (FoodGraph)