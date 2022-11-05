import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExerciseList from "./ListComponents/ExerciseList";
import { getAllExercises, deleteExercise, updateExercise } from "../../reducers/exerciseSlice";

function Exercise(props) {
    let navigate = useNavigate();
    const userToken = useSelector((state) => state.userState.user.token)

    const handleDeleteExercise = (id) => {
        props.deleteExercise({id: id, userToken: userToken})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
    }

    const selectEditExercise = (id) => {
        const objectToEdit = props.exerciseArray.filter(e => e._id === id)[0]
        let path = `edit/${id}`; 
        navigate(path, {state: {objectToEdit}});
    }

    useEffect(() => {
        props.getAllExercises(userToken)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h1>Exercise</h1>
            <ExerciseList list={props.exerciseArray}  handleDelete={handleDeleteExercise} handleEdit={selectEditExercise} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        exerciseArray: state.exerciseState.exerciseArray
    };
}

export default connect(mapStateToProps, { getAllExercises, deleteExercise, updateExercise })(Exercise)