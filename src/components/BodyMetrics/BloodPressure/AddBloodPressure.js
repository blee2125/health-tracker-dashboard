import React, { useState } from 'react';
import { Button, Modal, NavLink } from 'react-bootstrap';
import { createBloodPressure } from "../../../reducers/bloodPressureSlice";
import { connect, useSelector, useDispatch } from "react-redux";
import {notify} from '../../../reducers/notificationSlice'
import BloodPressureForm from './BloodPressureForm';

function AddBloodPressure(props) {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.userState.user.token)
    const [bloodPressureObject, setBloodPressureObject] = useState({
        systolic: '',
        diastolic: '',
        heartRate: '',
        time: '',
        notes: ''
    })
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.createBloodPressure({data: bloodPressureObject, userToken: userToken})
        .unwrap()
        .then((data) => {
            handleClose()
            dispatch(notify({message: 'Blood Pressure Added',type: 'success'}))
        })
        .catch((e) => {console.log(e)});
    }

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setBloodPressureObject(bloodPressureObject => ({
            ...bloodPressureObject,
            ...updatedValue
        }));        
    };

    return (
        <>
        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Add BP</NavLink>
        : <Button onClick={handleShow}>Add BP</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Blood Pressure</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BloodPressureForm 
                    bloodPressureObject={bloodPressureObject} 
                    updateData={updateData}
                />
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

export default connect(null, { notify, createBloodPressure}) (AddBloodPressure)