import React from "react";
import { Chart } from 'react-chartjs-2'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'

function WeightLineGraph(props) {

    const graphData = {
        labels: props.graphLabel,
        datasets: [
            {
                label: 'Pounds',
                backgroundColor: 'lightblue',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: props.weightArray
            }
        ]
    }

    return (
        <>
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
        </>
    )
}

export default (WeightLineGraph)