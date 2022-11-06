import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { Button, Modal, NavLink } from 'react-bootstrap';
import { updateFood } from "../../../reducers/foodSlice";
import FoodForm from "./FoodForm";
import {success} from '../../../reducers/notificationSlice'

function FoodEditModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [foodObject, setFoodObject] = useState({
        name: '',
        calories: '',
        carbsg: '',
        fatg: '',
        proteing: '',
        meal: '',
        amount: ''
    })
    const userToken = useSelector((state) => state.userState.user.token)

    const handleSubmit = () => {
        if (foodObject.name !== '') {
            props.updateFood({id: props.foodObject._id, data: foodObject, userToken: userToken})
            .unwrap()
            .then((data) => {
                dispatch(success({message: 'Food Updated',type: 'success'}))
                handleClose()
            })
            .catch((e) => {console.log(e)});
        }
    }

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setFoodObject(foodObject => ({
            ...foodObject,
            ...updatedValue
        }));        
    };

    const importData = {
        ...foodObject,
        ...(props.foodObject)
    };

    useEffect(() => {
        setFoodObject(importData)
        // eslint-disable-next-line
    }, [props])

    return (
        <>

        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Edit Food</NavLink>
        : <Button onClick={handleShow}>Edit</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Food</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FoodForm foodObject={foodObject} updateData={updateData}/>
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

export default connect(null, { success, updateFood }) (FoodEditModal)