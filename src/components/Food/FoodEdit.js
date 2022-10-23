import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import {useLocation, useParams, useNavigate } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import FoodForm from "./FoodForm";
import { updateFood } from "../../reducers/foodSlice";

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
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <h2>Food Edit</h2>
                <FoodForm  foodObject={foodObject} updateData={updateData} />
                <Button onClick={handleEditFood}>Submit</Button>
            </Card>
        </div>
    )
}

export default connect(null, { updateFood })(FoodEdit)