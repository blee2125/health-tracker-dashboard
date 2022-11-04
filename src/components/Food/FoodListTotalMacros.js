import React from "react";

function FoodListTotalMacros(props) {

    const calcTotalCarbs = props.list.reduce((accumulator, food) => {
        const carbs = food.carbsg > 0 ? food.carbsg : 0
        return accumulator + carbs;
    }, 0);

    const calcTotalFat = props.list.reduce((accumulator, food) => {
        const fat = food.fatg > 0 ? food.fatg : 0
        return accumulator + fat;
    }, 0);

    const calcTotalProtein = props.list.reduce((accumulator, food) => {
        const protein = food.proteing > 0 ? food.proteing : 0
        return accumulator + protein;
    }, 0);

    return (
        <div>
            <p>Carbs:{calcTotalCarbs} - Fat:{calcTotalFat} - Protein:{calcTotalProtein}</p>
        </div>
    );
}

export default FoodListTotalMacros;