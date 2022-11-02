import React from "react";
import { Button } from "react-bootstrap";
import DeleteConfirmation from "../Views/DeleteConfirmation";

function ExerciseListItem(props) {

    return (
        <tr>
            <td>{props.exerciseData.exerciseName}</td>
            <td>{props.exerciseData.duration}</td>
            <td>{props.exerciseData.timeOfExercise}</td>
            <td>{props.exerciseData.typeOfExercise}</td>
            <td>
                <Button onClick={() => props.editButton(props.exerciseData._id)}>Edit</Button>
                <DeleteConfirmation 
                    deleteItem={() => props.deleteButton(props.exerciseData._id)} 
                    info={props.exerciseData.exerciseName} 
                />
            </td>
        </tr>
    );
}

export default ExerciseListItem;