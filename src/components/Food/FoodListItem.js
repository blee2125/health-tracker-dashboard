import React from "react";
import Button from 'react-bootstrap/Button'
import DeleteConfirmation from "../DeleteConfirmation";

function FoodListItem(props) {

    return (
        <tr>
            <td><p>{props.foodData.name}</p></td>
            <td>{props.foodData.calories}</td>
            <td>
                <Button onClick={() => props.editButton(props.foodData._id)}>Edit</Button>
                <DeleteConfirmation 
                    deleteItem={() => props.deleteButton(props.foodData._id)} 
                    info={props.foodData.name} 
                />
            </td>
        </tr>
    );
}

export default FoodListItem;