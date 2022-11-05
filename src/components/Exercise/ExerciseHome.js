import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getExerciseToday, deleteExercise, updateSearchDate } from "../../reducers/exerciseSlice";
import ExerciseList from "./ListComponents/ExerciseList";
import DateFunctions from '../../functions/DateFunctions';
import ExerciseAddModal from './FormComponents/ExerciseAddModal'

const ExerciseHome = (props) => {
    let navigate = useNavigate();
    const userToken = useSelector((state) => state.userState.user.token)
    const exerciseTodayArray = useSelector((state) => state.exerciseState.exerciseTodayArray)

    const formattedDate = DateFunctions.createDateStringSplit()

    const handleGetTodayRequest = () => {
        props.getExerciseToday({date: formattedDate, token: userToken})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
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
        .catch((e) => {console.log(e)});
    }

    useEffect(() => {
        handleGetTodayRequest()
        // eslint-disable-next-line
    }, [])

    return (
        <>
        
            <ExerciseList 
                list={exerciseTodayArray}  
                handleDelete={handleDeleteExercise} 
                handleEdit={selectEditExercise} 
                listTitle={'Exercise Today'}
                addModal={<ExerciseAddModal/>}
            />
        </>
    )
}

export default connect(null, {getExerciseToday, deleteExercise, updateSearchDate}) (ExerciseHome)