import React from "react";
import FoodFunctions from "../../../functions/FoodFunctions";

function FoodListTotalMacros(props) {

    const calcTotalCarbs = (array) => { return FoodFunctions.calcTotalCarbs(array)}
    const calcTotalFat = (array) => { return FoodFunctions.calcTotalFat(array)}
    const calcTotalProtein = (array) => { return FoodFunctions.calcTotalProtein(array)}

    return (
        <div>
            <p>Carbs:{calcTotalCarbs(props.list)} - Fat:{calcTotalFat(props.list)} - Protein:{calcTotalProtein(props.list)}</p>
        </div>
    );
}

export default FoodListTotalMacros;