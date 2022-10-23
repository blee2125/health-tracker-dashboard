import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button'

import FoodList from "./FoodList";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createFood, getAllFood, deleteFood } from "../../reducers/foodSlice";
import { useSelector } from "react-redux";

function Food(props) {
    let navigate = useNavigate(); 
    const userToken = useSelector((state) => state.userState.user.token)

    const dateString = new Date().toString().split(' ')
    // eslint-disable-next-line
    const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

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
        const objectToEdit = props.foodArray.filter(e => e._id === id)[0]
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
            <Button onClick={() => props.getAllFood()}>Get Food</Button>
            <FoodList list={props.foodArray} handleDelete={handleDeleteFood} handleEdit={selectEditFood} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        foodArray: state.foodState.foodArray
    };
}

export default connect(mapStateToProps, { createFood, getAllFood, deleteFood }) (Food)