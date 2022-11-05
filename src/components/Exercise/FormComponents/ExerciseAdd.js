import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Card, Button} from 'react-bootstrap';
import ExerciseForm from "./ExerciseForm";
import { createExercise } from "../../../reducers/exerciseSlice";

function ExerciseAdd(props) {
    const [exerciseObject, setExerciseObject] = useState({
        exerciseName: "",
        duration: '',
        timeOfExercise: '',
        typeOfExercise: ''
    })
    const userToken = useSelector((state) => state.userState.user.token)

    const navigate = useNavigate();

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setExerciseObject(exerciseObject => ({
            ...exerciseObject,
            ...updatedValue
        }));        
    };

    const handleSubmit = () => {
        if (exerciseObject.exerciseName !== '') {
            props.createExercise({exerciseObject, userToken})
                .unwrap()
                .then((data) => {
                    navigate('/exercise')
                })
                .catch((e) => {
                console.log(e);
                });
        }
    }

    return (
        <div>
            <h1>Add Exercise</h1>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <ExerciseForm  exerciseObject={exerciseObject} updateData={updateData} />
            </Card>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { createExercise })(ExerciseAdd)