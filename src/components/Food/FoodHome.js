import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFoodToday, deleteFood, updateSearchDate } from "../../reducers/foodSlice";
import FoodList from "./FoodList";
import DateFunctions from '../../functions/DateFunctions';
import AddFoodModal from './FormComponents/AddFoodModal'
import FoodMacrosPieChart from "./GraphComponents/FoodMacrosPieChart";

const FoodHome = (props) => {
    let navigate = useNavigate();
    const userToken = useSelector((state) => state.userState.user.token)
    const foodTodayArray = useSelector((state) => state.foodState.foodTodayArray)

    const formattedDate = DateFunctions.createDateStringSplit()

    const handleGetTodayRequest = () => {
        props.getFoodToday({date: formattedDate, token: userToken})
          .unwrap()
          .then((data) => {})
          .catch((e) => {
            console.log(e);
          });
    }

    const selectEditFood = (id) => {
        const objectToEdit = foodTodayArray.filter(e => e._id === id)[0]
        let path = `../food/edit/${id}`; 
        navigate(path, {state: {objectToEdit}});
    }

    const handleDeleteFood = (id) => {
        props.deleteFood({id: id, userToken: userToken})
            .unwrap()
            .then((data) => {
                handleGetTodayRequest()
            })
            .catch((e) => {
                console.log(e);
            });
    }

    useEffect(() => {
        handleGetTodayRequest()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <FoodList 
                list={foodTodayArray}  
                handleDelete={handleDeleteFood} 
                handleEdit={selectEditFood} 
                listTitle={"Food Today"} 
                addModal={<AddFoodModal/>}
            />
            <FoodMacrosPieChart />
        </>
    )
}

export default connect(null, {getFoodToday, deleteFood, updateSearchDate}) (FoodHome)