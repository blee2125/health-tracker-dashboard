import React from "react";

import ExerciseListItem from "./ExerciseListItem";

function ExerciseList(props) {
    
    const listExerciseItems = props.list.map((exerciseItem, index) => {
        return (
            <ExerciseListItem exerciseData={exerciseItem} key={index} id={index} deleteButton={props.handleDelete}/>
        )
    })

    return (
        <ol>
            {listExerciseItems}
        </ol>
    );
  }

export default ExerciseList;