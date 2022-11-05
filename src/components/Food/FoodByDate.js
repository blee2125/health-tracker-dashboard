import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Form, Card } from "react-bootstrap";
import { getFoodByDate, deleteFood, updateSearchDate } from "../../reducers/foodSlice";
import FoodList from "./ListComponents/FoodList";
import DateFunctions from "../../functions/DateFunctions";

const FoodByDate = (props) => {
    let dispatch = useDispatch();
    const userToken = useSelector((state) => state.userState.user.token)
    const searchDate = useSelector((state) => state.foodState.searchDate)
    const foodByDayArray = useSelector((state) => state.foodState.foodByDayArray)

    const maxDate = DateFunctions.maxDateToday()

    const handleGetTodayRequest = () => {
        const formattedDate = DateFunctions.formatInputDateForSearch(searchDate)
        props.getFoodByDate({date: formattedDate, token: userToken})
          .unwrap()
          .then((data) => {})
          .catch((e) => {
            console.log(e);
          });
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
    
    const changeDate = (e) => {
        dispatch(updateSearchDate(e.target.value))
    }

    useEffect(() => {
        handleGetTodayRequest()
        // eslint-disable-next-line
    }, [searchDate])

    return (
        <>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <h2>Food By Date</h2>
                <Form.Group controlId="date">
                <Form.Control
                    type="date"
                    name="searchDate"
                    placeholder="Date"
                    defaultValue={searchDate}
                    max={maxDate}
                    onChange={changeDate}
                />
                </Form.Group>
            </Card>
            <FoodList list={foodByDayArray}  handleDelete={handleDeleteFood} />
        </>
    )
}

export default connect(null, {getFoodByDate, deleteFood, updateSearchDate}) (FoodByDate)