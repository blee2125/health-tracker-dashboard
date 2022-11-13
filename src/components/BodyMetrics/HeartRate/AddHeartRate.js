import React, { useState } from 'react';
import { Button, Modal, NavLink } from 'react-bootstrap';
import { createHeartRate } from "../../../reducers/heartRateSlice";
import { connect, useSelector, useDispatch } from "react-redux";
import {notify} from '../../../reducers/notificationSlice'
import HeartRateForm from './HeartRateForm';

function AddHeartRate(props) {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.userState.user.token)
    const [heartRateObject, setHeartRateObject] = useState({
        heartRate: '',
        time: '',
        notes: ''
    })
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.createHeartRate({data: heartRateObject, userToken: userToken})
        .unwrap()
        .then((data) => {
            handleClose()
            dispatch(notify({message: 'Heart Rate Added',type: 'success'}))
        })
        .catch((e) => {console.log(e)});
    }

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setHeartRateObject(heartRateObject => ({
            ...heartRateObject,
            ...updatedValue
        }));        
    };

    return (
        <>
        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Add Heart Rate</NavLink>
        : <Button onClick={handleShow}>Add Heart Rate</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Heart Rate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <HeartRateForm 
                    heartRateObject={heartRateObject} 
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

export default connect(null, { notify, createHeartRate}) (AddHeartRate)