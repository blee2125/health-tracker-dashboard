import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ExerciseForm from "./ExerciseForm";

import { connect } from "react-redux";
import { updateExercise } from "../../reducers/exerciseSlice";
import {useLocation, useParams, useNavigate} from 'react-router-dom';

function ExerciseEdit(props) {
    const location = useLocation();
    const params = useParams()
    const navigate = useNavigate();

    const [exerciseObject, setExerciseObject] = useState({
        exerciseName: "",
        duration: '',
        timeOfExercise: '',
        typeOfExercise: ''
    })

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setExerciseObject(exerciseObject => ({
            ...exerciseObject,
            ...updatedValue
        }));        
    };

    const handleEditExercise = () => {
        if (exerciseObject.exerciseName !== '') {
            props.updateExercise({id: params.id, data: {exerciseObject}})
                .unwrap()
                .then((data) => {
                    navigate('/exercise')
                })
                .catch((e) => {
                console.log(e);
                });
        }
    }

    const importData =  {
        ...exerciseObject,
        ...(location.state.objectToEdit)
    };

    useEffect(() => {
        setExerciseObject(importData)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>Exercise Edit</h1>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <ExerciseForm  exerciseObject={exerciseObject} updateData={updateData} />
                <Button onClick={handleEditExercise}> Submit</Button>
            </Card>
        </div>
    )
}

export default connect(null, { updateExercise })(ExerciseEdit)