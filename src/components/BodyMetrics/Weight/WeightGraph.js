import React from "react";
import {Card} from 'react-bootstrap';
import { Chart } from 'react-chartjs-2'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'
import { connect, useSelector } from "react-redux";
import { getWeightLast30Days } from "../../../reducers/weightSlice";
import { useEffect } from "react";

function WeightLineGraph(props) {
    const userToken = useSelector((state) => state.userState.user.token)
    const weightArray = useSelector((state) => state.weightState.weightArray)

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
                console.log(arr2.indexOf(day))
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
            console.log(mapWeightForGraph)
            return mapWeightForGraph
        } else {
            return [NaN]
        }
    }

    const graphData = {
        labels: thirtyDates(),
        datasets: [
        {
            label: 'Pounds',
            backgroundColor: 'lightblue',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: mappedData()
        }
        ]
    }

    useEffect(() => {
        props.getWeightLast30Days(userToken)
        // eslint-disable-next-line
    }, [])

  return (
    <>
      <Card bg='light' border="secondary" style={{ width: '800px', padding: '25px', margin: "25px"}}>
            <Chart
                type="line"
                data={graphData}
                options={{
                    spanGaps: true,
                plugins: {
                    title:{
                    display:true,
                    text:'Weight (last 30 days)',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'bottom'
                    }
                }
                }}
            />
        </Card>
    </>
  )
}

export default connect(null, {getWeightLast30Days}) (WeightLineGraph)