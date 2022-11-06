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

      const plugins2 = [
        {
          afterDraw: function (chart) {
            if (chart.config._config.data.datasets[0].data.filter(d => d>0).length < 1) {
              let ctx = chart.ctx;
              let width = chart.width;
              let height = chart.height;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.font = "30px Arial";
              ctx.fillText("No data to display", width / 2, height / 2);
              ctx.restore();
            }
          },
        },
      ];

    return (
        <>
        <Card bg='light' border="secondary" style={{ width: '400px', padding: '25px', margin: "25px"}}>
            <Chart
                type="pie"
                data={graphData}
                plugins={plugins2}
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