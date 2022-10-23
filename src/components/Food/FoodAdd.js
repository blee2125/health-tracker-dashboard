import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import FoodForm from "./FoodForm";

import { connect } from "react-redux";
import { createFood } from "../../reducers/foodSlice";

import { useNavigate } from "react-router-dom";

import FoodSearch from "./FoodSearch";
import { useSelector } from "react-redux";

function FoodAdd(props) {
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
    const [foodSearchResults, setFoodSearchResults] = useState({})
    const userToken = useSelector((state) => state.userState.user.token)

    const navigate = useNavigate();

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setFoodObject(foodObject => ({
            ...foodObject,
            ...updatedValue
        }));        
    };

    const handleSubmit = () => {
        if (foodObject.name !== '') {
            props.createFood({foodObject, userToken})
                .unwrap()
                .then((data) => {
                    navigate('/food')
                })
                .catch((e) => {
                console.log(e);
                });
        }
    }

    const transferButton = () => {
        console.log(foodSearchResults)
        setFoodObject(foodObject => ({
            ...foodObject,
            ...foodSearchResults
        }));  
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <h1>Search</h1>
                <FoodSearch updateData={setFoodSearchResults} />
            </Card>
            <Button onClick={transferButton}>Transfer Search to Form</Button>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <h1>Add Food</h1>
                <FoodForm foodObject={foodObject} updateData={updateData}/>
            </Card>
            <Button onClick={handleSubmit}> Submit</Button>
            
        </div>
    )
}

export default connect(null, { createFood }) (FoodAdd)