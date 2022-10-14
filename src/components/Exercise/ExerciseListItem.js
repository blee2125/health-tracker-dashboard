import React from "react";

import { Button } from "react-bootstrap";

function ExerciseListItem(props) {


    return (
        <tr>
            <td>{props.exerciseData.exerciseName}</td>
            <td>{props.exerciseData.duration}</td>
            <td>{props.exerciseData.timeOfExercise}</td>
            <td>{props.exerciseData.typeOfExercise}</td>
            <td><Button onClick={() => props.deleteButton(props.exerciseData._id)}> delete</Button></td>
        </tr>
    );
  }

export default ExerciseListItem;