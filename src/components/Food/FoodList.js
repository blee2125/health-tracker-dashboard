import React from "react";

import FoodListItem from "./FoodListItem";

function FoodList(props) {
    const listFoodItems = props.list.map((foodItem) => {
        //console.log('foodItem:', foodItem)
        return <FoodListItem foodData={foodItem} key={foodItem.id} />
    })


    return (
        <ol>
            {listFoodItems}
        </ol>
    );
  }

export default FoodList;