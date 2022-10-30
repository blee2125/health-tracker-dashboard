import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFoodToday, deleteFood, updateSearchDate } from "../../reducers/foodSlice";
import FoodList from "./FoodList";

const FoodHome = (props) => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const todayDate = new Date()
    const todayMonth = (todayDate.getMonth()+1).toString().padStart(2, "0")
    const todayDate2 = `${todayDate.getFullYear()}-${todayMonth}-${todayDate.getDate()}`
    const userToken = useSelector((state) => state.userState.user.token)
    const foodTodayArray = useSelector((state) => state.foodState.foodTodayArray)
    const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const handleGetTodayRequest = () => {
        const dateStringSplit = todayDate2.split('-')
        const formattedDate = (`${monthArray[dateStringSplit[1] - 1]} ${dateStringSplit[2]} ${dateStringSplit[0]}`)
        props.getFoodToday({date: formattedDate, token: userToken})
          .unwrap()
          .then((data) => {
            //console.log(data)
          })
          .catch((e) => {
            console.log(e);
          });
    }

    const selectEditFood = (id) => {
        const objectToEdit = props.foodTodayArray.filter(e => e._id === id)[0]
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
            <FoodList list={foodTodayArray}  handleDelete={handleDeleteFood} handleEdit={selectEditFood} listTitle={"Food Today"} />
        </>
    )
}

export default connect(null, {getFoodToday, deleteFood, updateSearchDate}) (FoodHome)