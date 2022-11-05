import React from "react";
import DeleteConfirmation from "../Views/DeleteConfirmation";
import HealthGoalEditModal from "./FormComponents/HealthGoalEditModal";
import CompletedButton from "./CompletedButton";

function HealthGoalListItem(props) {

    return (
        <tr>
            <td>{props.healthGoal.goal}</td>
            <td>{props.healthGoal.category}</td>
            <td>{props.healthGoal.completed ? 'yes' : 'no'}</td>
            <td>
                {props.healthGoal.completed ? '' : <CompletedButton id={props.healthGoal._id}/>}
            
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