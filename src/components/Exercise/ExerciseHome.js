import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getExerciseToday, deleteExercise, updateSearchDate } from "../../reducers/exerciseSlice";
import ExerciseList from "./ExerciseList";

const ExerciseHome = (props) => {
    let navigate = useNavigate();
    const todayDate = new Date()
    const todayMonth = (todayDate.getMonth()+1).toString().padStart(2, "0")
    const todayDate2 = `${todayDate.getFullYear()}-${todayMonth}-${todayDate.getDate()}`
    const userToken = useSelector((state) => state.userState.user.token)
    const exerciseTodayArray = useSelector((state) => state.exerciseState.exerciseTodayArray)
    const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const handleGetTodayRequest = () => {
        const dateStringSplit = todayDate2.split('-')
        const formattedDate = (`${monthArray[dateStringSplit[1] - 1]} ${dateStringSplit[2]} ${dateStringSplit[0]}`)
        props.getExerciseToday({date: formattedDate, token: userToken})
          .unwrap()
          .then((data) => {
            //console.log(data)
          })
          .catch((e) => {
            console.log(e);
          });
    }

    const selectEditExercise = (id) => {
        const objectToEdit = exerciseTodayArray.filter(e => e._id === id)[0]
        let path = `../exercise/edit/${id}`; 
        navigate(path, {state: {objectToEdit}});
    }

    const handleDeleteExercise = (id) => {
        props.deleteExercise({id: id, userToken: userToken})
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
            <ExerciseList list={exerciseTodayArray}  handleDelete={handleDeleteExercise} handleEdit={selectEditExercise} listTitle={'Exercise Today'} />
        </>
    )
}

export default connect(null, {getExerciseToday, deleteExercise, updateSearchDate}) (ExerciseHome)