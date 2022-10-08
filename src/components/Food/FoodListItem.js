import React from "react";

function FoodListItem(props) {

    function handleDeleteClick(id) {
        console.log(id)
      } //<button onClick={() => handleDeleteClick(props.id)}>X</button>

    return (
        <li>
            {props.foodData.foodName} {props.foodData.foodName} {props.foodData.foodName} {props.foodData.foodName} 
            <button onClick={() => props.deleteButton(props.id)}> delete</button>
        </li>
    );
  }

export default FoodListItem;