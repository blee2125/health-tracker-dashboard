import React from "react";

function FoodListItem(props) {
    // const listFoodItems = props.list.map((foodItem, index) => {
    //     console.log('foodItem:', foodItem)
    //     return <li key={index}>{foodItem}</li>
    // })
    function handleDeleteClick(id) {
        console.log(id)
        // const removeItem = props.foodData.filter((food) => {
        //     console.log(food)
        //   //return food.key !== key;
        // });
        //setFoodItem(removeItem);
      }


    return (
        <li>
            {props.foodData.name} <button onClick={() => handleDeleteClick(props.foodData.id)}>X</button>
        </li>
    );
  }

export default FoodListItem;