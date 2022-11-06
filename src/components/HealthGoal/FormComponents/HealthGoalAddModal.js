import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { Button, Modal, NavLink } from 'react-bootstrap';
import HealthGoalForm from "./HealthGoalForm";
import { createHealthGoal, getAllHealthGoal } from "../../../reducers/healthGoalSlice";
import {success} from '../../../reducers/notificationSlice'

function HealthGoalAddModal(props) {
    const [healthGoalObject, setHealthGoalObject] = useState({
        goal: "",
        category: '',
        timeframe: ''
    })
    const userToken = useSelector((state) => state.userState.user.token)
    const dispatch = useDispatch();
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        if (healthGoalObject.goal !== '') {
            props.createHealthGoal({healthGoalObject, userToken})
            .unwrap()
            .then((data) => {
                handleClose()
                dispatch(success({message: 'Goal Added',type: 'success'}))
                props.getAllHealthGoal(userToken)
            })
            .catch((e) => {console.log(e)});
        }
    }

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setHealthGoalObject(healthGoalObject => ({
            ...healthGoalObject,
            ...updatedValue
        }));        
    };

    return (
        <>

        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Add Goal</NavLink>
        : <Button onClick={handleShow}>Add Goal</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Goal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <HealthGoalForm healthGoalObject={healthGoalObject} updateData={updateData}/>
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

export default connect(null, { success, createHealthGoal, getAllHealthGoal }) (HealthGoalAddModal)