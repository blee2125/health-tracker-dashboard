import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import FoodForm from "./FoodForm";

import { connect } from "react-redux";
import { createFood } from "../../reducers/foodSlice";

import { useNavigate } from "react-router-dom";

function FoodAdd(props) {
    const [foodObject, setFoodObject] = useState({
        foodName: '',
        totalCalories: '',
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
        if (foodObject.foodName !== '') {
            props.createFood(foodObject)
                .unwrap()
                .then((data) => {
                    navigate('/food')
                })
                .catch((e) => {
                console.log(e);
                });
        }
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <h1>Add Food</h1>
                <FoodForm foodObject={foodObject} updateData={updateData}/>
            </Card>
            <Button onClick={handleSubmit}> Submit</Button>
        </div>
    )
}

export default connect(null, { createFood }) (FoodAdd)