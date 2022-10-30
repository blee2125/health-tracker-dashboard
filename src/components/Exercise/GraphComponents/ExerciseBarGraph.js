import React from "react";
import { Chart } from 'react-chartjs-2'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'

function ExerciseBarGraph(props) {

    // returns array with sum of duration per day
    function calcDuration() {
        const durationArray = []
        props.dataArray.forEach(element => {
            if (element !== undefined) {
                let dur = 0
                element.forEach(exer => {
                    if (exer.duration) {
                        dur = dur + exer.duration
                    }
                })
                durationArray.push(dur)
            } else {
                durationArray.push(element)
            }
        });
        return durationArray
    }

    const graphData = {
        labels: props.graphLabel,
        datasets: [
            {
                label: 'Total (minutes of exercise)',
                backgroundColor: 'lightblue',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: calcDuration()
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
                    text:'Exercise (last 30 days)',
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

export default (ExerciseBarGraph)