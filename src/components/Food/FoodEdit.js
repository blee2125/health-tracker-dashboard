import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import FoodForm from "./FoodForm";

import { connect } from "react-redux";
import { updateFood } from "../../reducers/foodSlice";
import {useLocation, useParams, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function FoodEdit(props) {
    const location = useLocation();
    const params = useParams()
    const navigate = useNavigate();

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

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setFoodObject(foodObject => ({
            ...foodObject,
            ...updatedValue
        }));        
    };

    const handleEditFood = () => {
        if (foodObject.name !== '') {
            props.updateFood({id: params.id, data: {foodObject}, userToken: userToken})
                .unwrap()
                .then((data) => {
                    navigate('/food')
                })
                .catch((e) => {
                console.log(e);
                });
        }
    }

    const importData =  {
        ...foodObject,
        ...(location.state.objectToEdit)
    };

    useEffect(() => {
        setFoodObject(importData)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>Food Edit</h1>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <FoodForm  foodObject={foodObject} updateData={updateData} />
                <Button onClick={handleEditFood}> Submit</Button>
            </Card>
        </div>
    )
}

export default connect(null, { updateFood })(FoodEdit)