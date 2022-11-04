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
                let total = 0
                const key = props.graphSelectionMacros
                element.forEach(food => {
                    if (props.graphSelectionMeal === 'All') {
                        if (food[key]) {
                            total = total + food[key]
                        }
                    } else if (food.meal === props.graphSelectionMeal) {
                        if (food[key]) {
                            total = total + food[key]
                        }
                    }
                })
                caloriesArray.push(total)
            } else {
                caloriesArray.push(element)
            }
        });
        return caloriesArray
    }

    const macrosName = () => {
        switch(props.graphSelectionMacros) {
            case 'calories':
                return 'Calories'
            case 'carbsg':
                return 'Carbs'
            case 'fatg':
                return 'Fat'
            case 'proteing':
                return 'Protein'
            default:
                return ''
          }
    }

    const graphData = {
        labels: props.graphLabel,
        datasets: [
            {
                label: `Total ${macrosName()}`,
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
                    text:`${macrosName()} Per Day (last 30 days)`,
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