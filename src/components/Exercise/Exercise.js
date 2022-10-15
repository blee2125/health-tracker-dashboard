import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';

import ExerciseList from "./ExerciseList";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllExercises, deleteExercise, updateExercise } from "../../reducers/exerciseSlice";

function Exercise(props) {
    let navigate = useNavigate(); 

    const dateString = new Date().toString().split(' ')
    // eslint-disable-next-line
    const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

    const handleDeleteExercise = (id) => {
        props.deleteExercise({id})
            .unwrap()
            .then((data) => {
            //console.log(data);
            })
            .catch((e) => {
            console.log(e);
            });
    }

    const selectEditExercise = (id) => {
        const objectToEdit = props.exerciseArray.filter(e => e._id === id)[0]
        let path = `edit/${id}`; 
        navigate(path, {state: {objectToEdit}});
    }

    useEffect(() => {
        props.getAllExercises()
        // eslint-disable-next-line
      }, [])

    return (
        <div>
            <h1>Exercise</h1>
            <Button onClick={() => navigate('/exercise/add')}>Add Exercise</Button>
            <Button onClick={() => props.getAllExercises()}> get all</Button>
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