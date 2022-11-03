import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect, useSelector } from "react-redux";
import FoodForm from "./FoodForm";
import { createFood, getFoodToday } from "../../reducers/foodSlice";

function AddFoodModal(props) {    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [foodObject, setFoodObject] = useState({
        name: '',
        calories: '',
        timeOfConsumption: '',
        meal: '',
        placeOfConsumption: '',
        withWhom: '',
        activity: '',
        mood: '',
        hungerLevel: '',
        fullness: '',
        amount: ''
    })
    const userToken = useSelector((state) => state.userState.user.token)

    const todayDate = new Date()
    const todayMonth = (todayDate.getMonth()+1).toString().padStart(2, "0")
    const todayDate2 = `${todayDate.getFullYear()}-${todayMonth}-${todayDate.getDate().toString().padStart(2, "0")}`
    const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setFoodObject(foodObject => ({
            ...foodObject,
            ...updatedValue
        }));        
    };

    const handleGetTodayRequest = () => {
        const dateStringSplit = todayDate2.split('-')
        const formattedDate = (`${monthArray[dateStringSplit[1] - 1]} ${dateStringSplit[2]} ${dateStringSplit[0]}`)
        props.getFoodToday({date: formattedDate, token: userToken})
          .unwrap()
          .then((data) => {})
          .catch((e) => {
            console.log(e);
          });
    }

    const handleAddSubmit = () => {
        if (foodObject.name !== '') {
            props.createFood({foodObject, userToken})
                .unwrap()
                .then((data) => {
                    handleGetTodayRequest()
                    handleClose()
                })
                .catch((e) => {
                    console.log(e);
                });
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