import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { createFood, getAllFood, deleteFood } from "../../reducers/foodSlice";
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap'
import FoodList from "./FoodList";

function Food(props) {
    let navigate = useNavigate(); 
    const userToken = useSelector((state) => state.userState.user.token)
    const foodArray = useSelector((state) => state.foodState.foodArray)

    const handleDeleteFood = (id) => {
        props.deleteFood({id: id, userToken: userToken})
            .unwrap()
            .then((data) => {
                //console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const selectEditFood = (id) => {
        const objectToEdit = foodArray.filter(e => e._id === id)[0]
        let path = `edit/${id}`; 
        navigate(path, {state: {objectToEdit}});
    }

    useEffect(() => {
        props.getAllFood(userToken)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>Food</h1>
            <Button onClick={() => navigate('/food/add')}>Add Food</Button>
            <FoodList list={foodArray} handleDelete={handleDeleteFood} handleEdit={selectEditFood} />
        </div>
    )
}

export default connect(null, { createFood, getAllFood, deleteFood }) (Food)