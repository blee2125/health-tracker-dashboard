import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

import { connect } from "react-redux";
import { createFood, getAllFood, deleteFood } from "../../reducers/foodSlice";

function Food(props) {
    const [foodObject, setFoodObject] = useState({
        foodName: "",
        totalCalories: "150",
        timeOfConsumption: "",
        meal: "",
        placeOfConsumption: "",
        withWhom: "",
        activity: "",
        mood: "",
        hungerLevel: "",
        fullness: "",
        amount: ""
    })

    const dateString = new Date().toString().split(' ')
    const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

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
                //console.log(data);
                })
                .catch((e) => {
                console.log(e);
                });
        }
    }

    const handleDeleteFood = (id) => {
        props.deleteFood({id})
            .unwrap()
            .then((data) => {
            //console.log(data);
            })
            .catch((e) => {
            console.log(e);
            });
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <h1>Food</h1>
                <FoodForm foodObject={foodObject} updateData={updateData}/>
                <Button onClick={handleSubmit}> Submit</Button>
            </Card>
            <Button onClick={() => props.getAllFood()}> get all food</Button>
            <FoodList list={props.foodArray} handleDelete={handleDeleteFood} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        foodArray: state.foodState.foodArray
    };
}

export default connect(mapStateToProps, { createFood, getAllFood, deleteFood }) (Food)