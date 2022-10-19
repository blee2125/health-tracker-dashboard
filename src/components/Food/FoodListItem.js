import React from "react";

import Button from 'react-bootstrap/Button'

function FoodListItem(props) {

    return (
        <tr>
            <td><p>{props.foodData.name}</p></td>
            <td>{props.foodData.calories}</td>
            <td>
                <Button onClick={() => props.editButton(props.foodData._id)}>edit</Button>
                <Button onClick={() => props.deleteButton(props.foodData._id)}>delete</Button>
            </td>
        </tr>
    );
  }

export default FoodListItem;