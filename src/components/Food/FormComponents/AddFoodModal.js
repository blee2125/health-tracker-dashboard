import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { Button, Modal, NavLink } from 'react-bootstrap';
import { createFood, getFoodToday } from "../../../reducers/foodSlice";
import FoodForm from "./FoodForm";
import DateFunctions from '../../../functions/DateFunctions';
import {success} from '../../../reducers/notificationSlice'
import FoodSearchModal from "../FoodSearchModal";

function AddFoodModal(props) {    
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false); clearForm()}
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [foodSearchResults, setFoodSearchResults] = useState({})
    const transferButton = () => {
        console.log(foodSearchResults)
        setFoodObject(foodObject => ({
            ...foodObject,
            ...{
                name: foodSearchResults.name,
                calories: foodSearchResults.calories,
                carbsg: foodSearchResults.carbohydrates_total_g,
                fatg: foodSearchResults.fat_total_g,
                proteing: foodSearchResults.protein_g
            }
        }));  
    }

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
                dispatch(success({message: 'Food Added',type: 'success'}))
                handleClose()
            })
            .catch((e) => {console.log(e)});
        }
    }

    const clearForm = () => {
        setFoodObject({
            name: '',
            calories: '',
            carbsg: '',
            fatg: '',
            proteing: '',
            meal: '',
            amount: ''
        })
    }

    return (
        <>
        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Add Food</NavLink>
        : <Button onClick={handleShow}>Add Food</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Food - <FoodSearchModal  updateData={setFoodSearchResults} transferButton={transferButton} /> <Button onClick={clearForm}>Clear</Button></Modal.Title>
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

export default connect(null, { success, createFood, getFoodToday }) (AddFoodModal)