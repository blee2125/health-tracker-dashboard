import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { createWeight, updateNewTime, updateNewWeight } from "../../../reducers/weightSlice";
import { connect, useSelector, useDispatch } from "react-redux";

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
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const changeWeight = (e) => {
        dispatch(updateNewWeight(e.target.value))
    }

    const changeTime = (e) => {
        dispatch(updateNewTime(e.target.value))
    }

    return (
        <>
        <Button onClick={handleShow}>
            Add
        </Button>

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

export default connect(null, {createWeight, updateNewTime, updateNewWeight}) (AddWeight)