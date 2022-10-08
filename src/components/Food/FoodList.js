import React from "react";
import Card from 'react-bootstrap/Card';

import FoodListItem from "./FoodListItem";

function FoodList(props) {
    
    const listFoodItems = props.list.map((foodItem, index) => {
        //console.log('foodItem:', foodItem)
        return (
            <FoodListItem foodData={foodItem} key={index} id={index} deleteButton={props.handleDelete}/>
        )
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            Food List
        <ol>
            {listFoodItems}
        </ol>
        </Card>
    );
  }

export default FoodList;