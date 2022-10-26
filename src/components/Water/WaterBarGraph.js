import React from "react";
import {Card} from 'react-bootstrap';
import { Chart } from 'react-chartjs-2'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'

function WaterBarGraph(props) {
  const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
  const d = new Date()
  const today = d.getDay()

  //sort last 7 days by createdAt
  let dataArray = props.sevenDaysData.slice(0)
  dataArray.sort(function(a, b){
      return new Date(a.createdAt) - new Date(b.createdAt);
  })

  //shifts weekday array based on day of the week (index)
  function newWeekArray(number) {
    let newWeekdayArray = []
    for (let i = number + 1; i < 7; i++) {
      newWeekdayArray.push(weekday[i])
    }
    for (let i = 0; i < number + 1; i++) {
      newWeekdayArray.push(weekday[i])
    }
    return newWeekdayArray
  }

  // returns new array of water data to sync with current day of the week
  function matchDataAndWeekdayArrays(arr1) {
    let arr2 = arr1.map(w=> w.time.split(' ')[0])
    let arr3 = newWeekArray(today)
    let arr4 = []
    arr3.forEach(day => {
        if (arr2.includes(day)) {
            arr4.push(arr1[arr2.indexOf(day)])
        } else {
            arr4.push('0')
        }
    })
    return arr4
  }

  const mapGlassesForGraph = matchDataAndWeekdayArrays(dataArray).map((water) =>
    water.glasses
  );

  const graphData = {
    labels: newWeekArray(today),
    datasets: [
      {
        label: 'Glasses',
        backgroundColor: 'lightblue',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: mapGlassesForGraph
      }
    ]
  }

  return (
    <>
      <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
        <Chart
            type="bar"
            data={graphData}
            options={{
              plugins: {
                title:{
                  display:true,
                  text:'Water per day (last 7 days)',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }
            }}
          />
        </Card>
    </>
  )
}

export default (WaterBarGraph)