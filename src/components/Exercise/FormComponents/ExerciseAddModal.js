import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";
import { Button, Modal, NavLink } from 'react-bootstrap';
import ExerciseForm from "./ExerciseForm";
import { createExercise, getAllExercises, getExerciseToday } from "../../../reducers/exerciseSlice";

function ExerciseAddModal(props) {
    const [exerciseObject, setExerciseObject] = useState({
        exerciseName: "",
        duration: '',
        timeOfExercise: '',
        typeOfExercise: ''
    })
    const userToken = useSelector((state) => state.userState.user.token)

    const todayDate = new Date()
    const todayMonth = (todayDate.getMonth()+1).toString().padStart(2, "0")
    const todayDate2 = `${todayDate.getFullYear()}-${todayMonth}-${todayDate.getDate().toString().padStart(2, "0")}`
    const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const dateStringSplit = todayDate2.split('-')
    const formattedDate = (`${monthArray[dateStringSplit[1] - 1]} ${dateStringSplit[2]} ${dateStringSplit[0]}`)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        if (exerciseObject.exerciseName !== '') {
            props.createExercise({exerciseObject, userToken})
                .unwrap()
                .then((data) => {
                    handleClose()
                    props.getAllExercises(userToken)
                    props.getExerciseToday({date: formattedDate, token: userToken})
                })
                .catch((e) => {
                    console.log(e);
                });
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

    return (
        <>

        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Add Exercise</NavLink>
        : <Button onClick={handleShow}>Add Exercise</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Exercise</Modal.Title>
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

export default connect(null, { createExercise, getAllExercises, getExerciseToday }) (ExerciseAddModal)