import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";
import { Button, Modal, NavLink } from 'react-bootstrap';
import HealthGoalForm from "./HealthGoalForm";
import { updateHealthGoal, getAllHealthGoal } from "../../../reducers/healthGoalSlice";

function HealthGoalEditModal(props) {
    const [healthGoalObject, setHealthGoalObject] = useState({
        goal: props.healthGoalObject.goal,
        category: props.healthGoalObject.category,
        timeframe: props.healthGoalObject.timeframe
    })
    const userToken = useSelector((state) => state.userState.user.token)
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        if (healthGoalObject.goal !== '') {
            props.updateHealthGoal({id: props.healthGoalObject._id, data: healthGoalObject, userToken: userToken})
                .unwrap()
                .then((data) => {
                    handleClose()
                    props.getAllHealthGoal(userToken)
                })
                .catch((e) => {
                    console.log(e);
                });
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
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Edit Goal</NavLink>
        : <Button onClick={handleShow}>Edit</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Goal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <HealthGoalForm healthGoalObject={healthGoalObject} updateData={updateData}/>
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

export default connect(null, { updateHealthGoal, getAllHealthGoal }) (HealthGoalEditModal)