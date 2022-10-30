import React, { useState } from "react";
import {Card} from 'react-bootstrap';
import { connect, useSelector } from "react-redux";
import { getWeightLast30Days } from "../../../reducers/weightSlice";
import { useEffect } from "react";
import WeightGraphSelection from "./GraphComponents/WeightGraphSelection";
import WeightLineGraph from "./GraphComponents/WeightLineGraph";
import BMILineGraph from "./GraphComponents/BMILineGraph";

function WeightGraph(props) {
    const userToken = useSelector((state) => state.userState.user.token)
    const weightArray = useSelector((state) => state.weightState.weightArray)
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

    //returns new array - weight(first if multiply for one day) or NaN
    function matchDataAndDateArrays(arr1) {
        let arr2 = arr1.map(w=> w.date.split(' ')[2]*1)
        let arr3 = thirtyDates()
        let arr4 = []
        arr3.forEach(day => {
            if (arr2.includes(day)) {
                arr4.push(weightArray[arr2.indexOf(day)])
            } else {
                arr4.push(NaN)
            }
        })
        return (arr4)
    }

    //returns array of weight
    function mappedData() {
        if (weightArray !== undefined) {
            const mapWeightForGraph = matchDataAndDateArrays(weightArray).map((w) =>
                w.weight
            );
            return mapWeightForGraph
        } else {
            return [NaN]
        }
    }

    useEffect(() => {
        props.getWeightLast30Days(userToken)
        // eslint-disable-next-line
    }, [])

  return (
    <>
        <WeightGraphSelection graphSelection={graphSelection} setGraphSelection={setGraphSelection}/>
        <Card bg='light' border="secondary" style={{ width: '800px', padding: '25px', margin: "25px"}}>
            {graphSelection === 'Weight' &&
                <WeightLineGraph
                    graphLabel={thirtyDates()}
                    weightArray={mappedData()}
                />
            }
            {graphSelection === 'BMI' &&
                <BMILineGraph
                    graphLabel={thirtyDates()}
                    weightArray={mappedData()}
                />
            }
        </Card>
    </>
  )
}

export default connect(null, {getWeightLast30Days}) (WeightGraph)