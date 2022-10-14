import React from "react";

function ExerciseListItem(props) {


    return (
        <li>
            {props.exerciseData.exerciseName}
            <button onClick={() => props.deleteButton(props.exerciseData._id)}> delete</button>
        </li>
    );
  }

export default ExerciseListItem;