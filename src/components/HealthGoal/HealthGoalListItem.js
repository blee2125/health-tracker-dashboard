import React from "react";
import DeleteConfirmation from "../Views/DeleteConfirmation";
import HealthGoalEditModal from "./HealthGoalEditModal";

function HealthGoalListItem(props) {

    return (
        <tr>
            <td>{props.healthGoal.goal}</td>
            <td>
                <HealthGoalEditModal
                    healthGoalObject={props.healthGoal}
                />
                <DeleteConfirmation 
                    deleteItem={() => props.deleteButton(props.healthGoal._id)} 
                    info={props.healthGoal.goal} 
                />
            </td>
        </tr>
    );
}

export default HealthGoalListItem;