import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Card, Button} from 'react-bootstrap';
import FoodForm from "./FoodForm";
import { createFood } from "../../../reducers/foodSlice";
import FoodSearchModal from "../FoodSearchModal";

function FoodAdd(props) {
    const [foodObject, setFoodObject] = useState({
        name: '',
        calories: '',
        carbsg: '',
        fatg: '',
        proteing: '',
        meal: '',
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
            .catch((e) => {console.log(e)});
        }
    }

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

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <FoodSearchModal  updateData={setFoodSearchResults} transferButton={transferButton} />
                <h2>Add Food</h2>
                <FoodForm foodObject={foodObject} updateData={updateData}/>
                <Button onClick={handleSubmit}>Submit</Button>
            </Card>
        </div>
    )
}

export default connect(null, { createFood }) (FoodAdd)