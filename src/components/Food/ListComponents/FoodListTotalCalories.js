import React from "react";

function FoodListTotalCalories(props) {

    const calcTotal = props.list.reduce((accumulator, food) => {
        const cal = food.calories > 0 ? food.calories : 0
        return accumulator + cal;
    }, 0);

    return (
        <div>
            <p>Total Calories - {calcTotal.toFixed(0)}</p>
        </div>
    );
}

export default FoodListTotalCalories;