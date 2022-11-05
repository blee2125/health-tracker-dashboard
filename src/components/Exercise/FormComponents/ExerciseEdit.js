import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {useLocation, useParams, useNavigate} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import ExerciseForm from "./ExerciseForm";
import { updateExercise } from "../../../reducers/exerciseSlice";

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
    const userToken = useSelector((state) => state.userState.user.token)

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
            props.updateExercise({id: params.id, data: {exerciseObject}, userToken: userToken})
            .unwrap()
            .then((data) => {
                navigate('/exercise')
            })
            .catch((e) => {console.log(e)});
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
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <h2>Exercise Edit</h2>
                <ExerciseForm  exerciseObject={exerciseObject} updateData={updateData} />
                <Button onClick={handleEditExercise}>Submit</Button>
            </Card>
        </div>
    )
}

export default connect(null, { updateExercise })(ExerciseEdit)