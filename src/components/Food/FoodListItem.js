import React from "react";

import Button from 'react-bootstrap/Button'

function FoodListItem(props) {

    return (

        <tr>
            <td>{props.foodData.foodName}</td>

            <td><Button onClick={() => props.deleteButton(props.foodData._id)}> delete</Button></td>
        </tr>
    );
  }

export default FoodListItem;