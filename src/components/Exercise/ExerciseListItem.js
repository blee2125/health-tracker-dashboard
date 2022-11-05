import React from "react";
import DeleteConfirmation from "../Views/DeleteConfirmation";
import ExerciseEditModal from './FormComponents/ExerciseEditModal'

function ExerciseListItem(props) {

    return (
        <tr>
            <td>{props.exerciseData.exerciseName}</td>
            <td>{props.exerciseData.duration}</td>
            <td>{props.exerciseData.timeOfExercise}</td>
            <td>{props.exerciseData.typeOfExercise}</td>
            <td>
                <ExerciseEditModal
                    exerciseData={props.exerciseData}
                />
                <DeleteConfirmation 
                    deleteItem={() => props.deleteButton(props.exerciseData._id)} 
                    info={props.exerciseData.exerciseName} 
                />
            </td>
        </tr>
    );
}

export default ExerciseListItem;