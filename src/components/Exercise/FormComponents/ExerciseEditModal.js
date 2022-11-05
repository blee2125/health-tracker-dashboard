import React, { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";
import { Button, Modal, NavLink } from 'react-bootstrap';
import { updateExercise } from "../../../reducers/exerciseSlice";
import ExerciseForm from "./ExerciseForm";

function ExerciseEditModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [exerciseObject, setExerciseObject] = useState({
        exerciseName: "",
        duration: '',
        timeOfExercise: '',
        typeOfExercise: ''
    })
    const userToken = useSelector((state) => state.userState.user.token)

    const handleSubmit = () => {
        if (exerciseObject.exerciseName !== '') {
            props.updateExercise({id: props.exerciseData._id, data: exerciseObject, userToken: userToken})
                .unwrap()
                .then((data) => {
                    handleClose()
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

    const importData = {
        ...exerciseObject,
        ...(props.exerciseData)
    };

    useEffect(() => {
        setExerciseObject(importData)
        // eslint-disable-next-line
    }, [props])

    return (
        <>

        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Edit Exercise</NavLink>
        : <Button onClick={handleShow}>Edit</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Exercise</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ExerciseForm exerciseObject={exerciseObject} updateData={updateData}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button onClick={handleSubmit}>
                Update
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default connect(null, { updateExercise }) (ExerciseEditModal)