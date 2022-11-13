import React from "react";
import FoodFunctions from "../../../functions/FoodFunctions";

function FoodListTotalCalories(props) {
    
    const calcTotalCalories = (array) => { return FoodFunctions.calcTotalCalories(array)}

    return (
        <div>
            <p>Total Calories - {calcTotalCalories(props.list)}</p>
        </div>
    );
}

export default FoodListTotalCalories;