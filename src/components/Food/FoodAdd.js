import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Card, Button} from 'react-bootstrap';
import FoodForm from "./FoodForm";
import FoodSearch from "./FoodSearch";
import { createFood } from "../../reducers/foodSlice";

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
                <h2>Search</h2>
                <FoodSearch updateData={setFoodSearchResults} />
            </Card>
            <Button onClick={transferButton}>Transfer</Button>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <h2>Add Food</h2>
                <FoodForm foodObject={foodObject} updateData={updateData}/>
                <Button onClick={handleSubmit}>Submit</Button>
            </Card>
        </div>
    )
}

export default connect(null, { createFood }) (FoodAdd)