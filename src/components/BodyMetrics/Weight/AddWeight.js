import React, { useState } from 'react';
import { Form, Button, Modal, NavLink } from 'react-bootstrap';
import { createWeight, updateNewTime, updateNewWeight } from "../../../reducers/weightSlice";
import { connect, useSelector, useDispatch } from "react-redux";
import {notify} from '../../../reducers/notificationSlice'

function AddWeight(props) {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.userState.user.token)
    const weight = useSelector((state) => state.weightState.newWeight.weight)
    const time = useSelector((state) => state.weightState.newWeight.time)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.createWeight({data: {weight: weight, time: time}, token: userToken})
        .unwrap()
        .then((data) => {
            handleClose()
            dispatch(notify({message: 'Weight Added',type: 'success'}))
        })
        .catch((e) => {console.log(e)});
    }

    const changeWeight = (e) => {
        dispatch(updateNewWeight(e.target.value))
    }

    const changeTime = (e) => {
        dispatch(updateNewTime(e.target.value))
    }

    return (
        <>
        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Add Weight</NavLink>
        : <Button onClick={handleShow}>Add Weight</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Weight</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Weight" 
                            onChange={changeWeight}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupWeightTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control 
                            type="time" 
                            placeholder="Time" 
                            onChange={changeTime}
                        />
                    </Form.Group>
                </Form>
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

export default connect(null, { notify, createWeight, updateNewTime, updateNewWeight}) (AddWeight)