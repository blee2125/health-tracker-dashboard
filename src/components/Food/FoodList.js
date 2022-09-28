import React from "react";

import FoodListItem from "./FoodListItem";

function FoodList(props) {
    
    const listFoodItems = props.list.map((foodItem, index) => {
        //console.log('foodItem:', foodItem)
        return (
            <FoodListItem foodData={foodItem} key={index} id={index} deleteButton={props.handleDelete}/>
        )
    })

    return (
        <ol>
            {listFoodItems}
        </ol>
    );
  }

export default FoodList;