import React from "react";
import DeleteConfirmation from "../../Views/DeleteConfirmation";
import EditFoodModal from "../FormComponents/EditFoodModal";

function FoodListItem(props) {

    return (
        <tr>
            <td><p>{props.foodData.name}</p></td>
            <td>{props.foodData.calories}</td>
            <td>
                <EditFoodModal
                    foodObject={props.foodData}
                />
                <DeleteConfirmation 
                    deleteItem={() => props.deleteButton(props.foodData._id)} 
                    info={props.foodData.name} 
                />
            </td>
        </tr>
    );
}

export default FoodListItem;