import React from "react";

function FoodListTotalCalories(props) {

    const calcTotal = props.list.reduce((accumulator, food) => {
        return accumulator + food.calories;
      }, 0);

    return (
        <div>
            <p>Total Calories - {calcTotal}</p>
        </div>
    );
}

export default FoodListTotalCalories;