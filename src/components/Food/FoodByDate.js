import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import { getFoodByDate, deleteFood, updateSearchDate } from "../../reducers/foodSlice";
import FoodList from "./FoodList";
import DateFunctions from "../../functions/DateFunctions";

const FoodByDate = (props) => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const userToken = useSelector((state) => state.userState.user.token)
    const searchDate = useSelector((state) => state.foodState.searchDate)

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

    const selectEditFood = (id) => {
        const objectToEdit = props.foodByDayArray.filter(e => e._id === id)[0]
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
            <FoodList list={props.foodByDayArray}  handleDelete={handleDeleteFood} handleEdit={selectEditFood} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        foodByDayArray: state.foodState.foodByDayArray
    };
}

export default connect(mapStateToProps, {getFoodByDate, deleteFood, updateSearchDate}) (FoodByDate)