import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect, useSelector } from "react-redux";
import { createFood, getFoodToday } from "../../../reducers/foodSlice";
import FoodForm from "./FoodForm";
import DateFunctions from '../../../functions/DateFunctions';

function AddFoodModal(props) {    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const formattedDate = DateFunctions.formatDateForSearch()

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setFoodObject(foodObject => ({
            ...foodObject,
            ...updatedValue
        }));        
    };

    const handleGetTodayRequest = () => {        
        props.getFoodToday({date: formattedDate, token: userToken})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
    }

    const handleAddSubmit = () => {
        if (foodObject.name !== '') {
            props.createFood({foodObject, userToken})
            .unwrap()
            .then((data) => {
                handleGetTodayRequest()
                handleClose()
            })
            .catch((e) => {console.log(e)});
        }
    }

    return (
        <>
        <Button onClick={handleShow}>
            Add Food
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Food</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FoodForm foodObject={foodObject} updateData={updateData}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button onClick={handleAddSubmit}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default connect(null, { createFood, getFoodToday }) (AddFoodModal)