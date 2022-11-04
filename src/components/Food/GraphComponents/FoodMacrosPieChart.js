import React from "react";
import { Chart } from 'react-chartjs-2'
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

function FoodMacrosPieChart(props) {
    const foodTodayArray = useSelector((state) => state.foodState.foodTodayArray)

    // calculates total calories for carbs, fat, protein
    function calcMacros() {
        let carbsCal = 0;
        let fatCal = 0;
        let proteinCal = 0;
        foodTodayArray.forEach(food => {
            if (food.carbsg > 0) {
                carbsCal = carbsCal + (food.carbsg * 4)
            }
            if (food.fatg > 0) {
                fatCal = fatCal + (food.fatg * 9)
            }
            if (food.proteing > 0) {
                proteinCal = proteinCal + (food.proteing * 4)
            }
        })
        return [carbsCal, fatCal, proteinCal]
    }

    const graphData = {
        labels: [
          'Carbs',
          'Fat',
          'Protein'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: calcMacros(),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

    return (
        <>
        <Card bg='light' border="secondary" style={{ width: '400px', padding: '25px', margin: "25px"}}>
            <Chart
                type="pie"
                data={graphData}
                options={{
                    
                plugins: {
                    title:{
                    display:true,
                    text:`Macros (Total Calories)`,
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

export default (FoodMacrosPieChart)