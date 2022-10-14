import React from "react";

import Button from 'react-bootstrap/Button'

function FoodListItem(props) {

    // function handleDeleteClick(id) {
    //     console.log(id)
    //   } //<button onClick={() => handleDeleteClick(props.id)}>X</button>

    return (
        <li>
            {props.foodData.foodName} {props.foodData.foodName} {props.foodData.foodName} {props.foodData.foodName} 
            <Button onClick={() => props.deleteButton(props.id)}> delete</Button>
        </li>
    );
  }

export default FoodListItem;