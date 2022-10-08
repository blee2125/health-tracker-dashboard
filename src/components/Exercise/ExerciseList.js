import React from "react";
import Card from 'react-bootstrap/Card';


import ExerciseListItem from "./ExerciseListItem";

function ExerciseList(props) {
    
    const listExerciseItems = props.list.map((exerciseItem, index) => {
        return (
            <ExerciseListItem exerciseData={exerciseItem} key={index} id={index} deleteButton={props.handleDelete}/>
        )
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            Exercise List
            <ol>
                {listExerciseItems}
            </ol>
        </Card>
    );
  }

export default ExerciseList;