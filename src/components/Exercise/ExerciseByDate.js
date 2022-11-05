import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Form, Card } from "react-bootstrap";
import { getExerciseByDate, deleteExercise, updateSearchDate } from "../../reducers/exerciseSlice";
import ExerciseList from "./ListComponents/ExerciseList";

const ExerciseByDate = (props) => {
    let dispatch = useDispatch();
    const todayDate = new Date()
    const todayMonth = (todayDate.getMonth()+1).toString().padStart(2, "0")
    const todayDate2 = `${todayDate.getFullYear()}-${todayMonth}-${todayDate.getDate().toString().padStart(2, "0")}`
    const userToken = useSelector((state) => state.userState.user.token)
    const searchDate = useSelector((state) => state.exerciseState.searchDate)
    const exerciseByDayArray = useSelector((state) => state.exerciseState.exerciseByDayArray)
    const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const handleGetTodayRequest = () => {
        const dateStringSplit = searchDate.split('-')
        const formattedDate = (`${monthArray[dateStringSplit[1] - 1]} ${dateStringSplit[2]} ${dateStringSplit[0]}`)
        props.getExerciseByDate({date: formattedDate, token: userToken})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
    }

    const handleDeleteExercise = (id) => {
        props.deleteExercise({id: id, userToken: userToken})
        .unwrap()
        .then((data) => {
            handleGetTodayRequest()
        })
        .catch((e) => {console.log(e)});
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
                <h2>Exercise By Date</h2>
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
            <ExerciseList list={exerciseByDayArray}  handleDelete={handleDeleteExercise} />
        </>
    )
}

export default connect(null, {getExerciseByDate, deleteExercise, updateSearchDate}) (ExerciseByDate)