import React from "react";
import { Chart } from 'react-chartjs-2'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'

function FoodBarGraph(props) {

    // returns array with sum of calories per day
    function calcCalories() {
        const caloriesArray = []
        props.dataArray.forEach(element => {
            if (element !== undefined) {
                let cal = 0
                element.forEach(food => {
                    if (food.calories) {
                        cal = cal + food.calories
                    }
                })
                caloriesArray.push(cal)
            } else {
                caloriesArray.push(element)
            }
        });
        return caloriesArray
    }

    const graphData = {
        labels: props.graphLabel,
        datasets: [
            {
                label: 'Total Calories',
                backgroundColor: 'lightblue',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: calcCalories()
            }
        ]
    }

    return (
        <>
            <Chart
                type="bar"
                data={graphData}
                options={{
                    spanGaps: true,
                plugins: {
                    title:{
                    display:true,
                    text:'Calories Per Day (last 30 days)',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'bottom'
                    }
                }
                }}
            />
        </>
    )
}

export default (FoodBarGraph)