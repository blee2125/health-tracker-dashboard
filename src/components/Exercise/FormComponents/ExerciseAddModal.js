import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { Button, Modal, NavLink } from 'react-bootstrap';
import ExerciseForm from "./ExerciseForm";
import { createExercise, getAllExercises, getExerciseToday } from "../../../reducers/exerciseSlice";
import {success} from '../../../reducers/notificationSlice'
import DateFunctions from '../../../functions/DateFunctions';

function ExerciseAddModal(props) {
    const [exerciseObject, setExerciseObject] = useState({
        exerciseName: "",
        duration: '',
        timeOfExercise: '',
        typeOfExercise: ''
    })
    const userToken = useSelector((state) => state.userState.user.token)
    const dispatch = useDispatch();

    const formattedDate = DateFunctions.formatDateForSearch()
    
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false); clearForm()}
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        if (exerciseObject.exerciseName !== '') {
            props.createExercise({exerciseObject, userToken})
            .unwrap()
            .then((data) => {
                handleClose()
                dispatch(success({message: 'Exercise Added',type: 'success'}))
                props.getAllExercises(userToken)
                props.getExerciseToday({date: formattedDate, token: userToken})
            })
            .catch((e) => {console.log(e)});
        }
    }

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setExerciseObject(exerciseObject => ({
            ...exerciseObject,
            ...updatedValue
        }));        
    };

    const clearForm = () => {
        setExerciseObject({
            exerciseName: "",
            duration: '',
            timeOfExercise: '',
            typeOfExercise: ''
        })
    }

    return (
        <>

        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Add Exercise</NavLink>
        : <Button onClick={handleShow}>Add Exercise</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Exercise - <Button onClick={clearForm}>Clear</Button></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ExerciseForm exerciseObject={exerciseObject} updateData={updateData}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button onClick={handleSubmit}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default connect(null, { success, createExercise, getAllExercises, getExerciseToday }) (ExerciseAddModal)