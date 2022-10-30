import React from "react";
import { Chart } from 'react-chartjs-2'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from "react-redux";

function BMILineGraph(props) {
    const height = useSelector((state) => state.userState.user.height)

    const calcBMI = (weight) => {
        const bmi = (weight/(height*height))*703
        return bmi.toFixed(1)
    }

    //returns array of bmi
    function mappedData() {
        if (props.weightArray !== undefined) {
            const mapBMIForGraph = (props.weightArray).map((w) => {
                if (w === undefined) {
                    return NaN
                } else {
                    return calcBMI(w)
                }
            }
            );
            return mapBMIForGraph
        } else {
            return [NaN]
        }
    }

    const graphData = {
        labels: props.graphLabel,
        datasets: [
            {
                label: 'BMI',
                backgroundColor: 'black',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: mappedData()
            }
        ]
    }

    var options2 = {   
        spanGaps: true,
        scales: {
            y: {
                max: 40,
                min: 10,
                ticks: {
                    stepSize: 5
                }
            }
        },
        plugins: {
            title:{
                display:true,
                text:'Body Mass Index (last 30 days)',
                fontSize:20
            },
            legend:{
                display:false,
                position:'bottom'
            },
            backgrounds: {
                hbars: [
                    {
                        from: 10,
                        to: 18.5,
                        color: "lightblue"
                    },
                    {
                        from: 18.5,
                        to: 25,
                        color: "lightgreen"
                    },
                    {
                        from: 25,
                        to: 30,
                        color: "yellow"
                    },
                    {
                        from: 30,
                        to: 35,
                        color: "#ffae42"
                    },
                    {
                        from: 35,
                        to: 40,
                        color: "#ff6347"
                    }
                ]
            }
        }
    }

    var plugins2 = [{
        id: 'backgrounds',
        beforeDraw: (chart, args, options) => {
            const {
                ctx,
                chartArea,
                scales: {
                    y
                }
            } = chart;
    
            options.hbars.forEach((hBar) => {
                ctx.save();
                ctx.fillStyle = hBar.color;
                ctx.fillRect(chartArea.left, y.getPixelForValue(hBar.from), chartArea.right - chartArea.left, y.getPixelForValue(hBar.to) - y.getPixelForValue(hBar.from));
                ctx.restore();
            })
        }
    }]  

    return (
        <>
            <Chart
                type="line"
                data={graphData}
                options={
                    options2
                }
                plugins={plugins2}
            />
        </>
    )
}

export default (BMILineGraph)