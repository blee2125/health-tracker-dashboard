import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import { getFoodByDate, deleteFood, updateSearchDate } from "../../reducers/foodSlice";
import FoodList from "./FoodList";

const FoodByDate = (props) => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const todayDate = new Date()
    const todayMonth = (todayDate.getMonth()+1).toString().padStart(2, "0")
    const todayDate2 = `${todayDate.getFullYear()}-${todayMonth}-${todayDate.getDate()}`
    const userToken = useSelector((state) => state.userState.user.token)
    const searchDate = useSelector((state) => state.foodState.searchDate)
    const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const handleGetTodayRequest = () => {
        const dateStringSplit = searchDate.split('-')
        const formattedDate = (`${monthArray[dateStringSplit[1] - 1]} ${dateStringSplit[2]} ${dateStringSplit[0]}`)
        props.getFoodByDate({date: formattedDate, token: userToken})
          .unwrap()
          .then((data) => {
            //console.log(data)
          })
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
                    max={todayDate2}
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