import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { createFood, getAllFood, deleteFood } from "../../reducers/foodSlice";
import { useNavigate } from "react-router-dom";
import FoodList from "./ListComponents/FoodList";

import FoodMacrosPieChart from './GraphComponents/FoodMacrosPieChart'
import FoodMealData from "./DisplayComponents/FoodMealData";

function Food(props) {
    let navigate = useNavigate(); 
    const userToken = useSelector((state) => state.userState.user.token)
    const foodTodayArray = useSelector((state) => state.foodState.foodTodayArray)

    const handleDeleteFood = (id) => {
        props.deleteFood({id: id, userToken: userToken})
            .unwrap()
            .then((data) => {})
            .catch((e) => {
                console.log(e);
            });
    }

    const selectEditFood = (id) => {
        const objectToEdit = foodTodayArray.filter(e => e._id === id)[0]
        let path = `edit/${id}`; 
        navigate(path, {state: {objectToEdit}});
    }

    useEffect(() => {
        props.getAllFood(userToken)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>Food Today</h1>
            <FoodMealData 
                foodData={foodTodayArray}
            />
            <FoodList 
                list={foodTodayArray}  
                handleDelete={handleDeleteFood} 
                handleEdit={selectEditFood} 
                listTitle={"Breakfast"} 
                meal={'Breakfast'}
            />
            <FoodList 
                list={foodTodayArray}  
                handleDelete={handleDeleteFood} 
                handleEdit={selectEditFood} 
                listTitle={"Lunch"} 
                meal={'Lunch'}
            />
            <FoodList 
                list={foodTodayArray}  
                handleDelete={handleDeleteFood} 
                handleEdit={selectEditFood} 
                listTitle={"Dinner"} 
                meal={'Dinner'}
            />
            <FoodList 
                list={foodTodayArray}  
                handleDelete={handleDeleteFood} 
                handleEdit={selectEditFood} 
                listTitle={"Snack"} 
                meal={'Snack'}
            />
            <FoodMacrosPieChart />
        </div>
    )
}

export default connect(null, { createFood, getAllFood, deleteFood }) (Food)