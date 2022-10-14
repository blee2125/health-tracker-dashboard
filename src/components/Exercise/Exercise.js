import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ExerciseList";

import { connect } from "react-redux";

import { createExercise } from "../../reducers/exerciseSlice";

function Exercise(props) {
    const [exerciseObject, setExerciseObject] = useState({
        exerciseName: "",
        duration: '',
        timeOfExercise: null,
        typeOfExercise: null
    })

    const dateString = new Date().toString().split(' ')
    const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setExerciseObject(exerciseObject => ({
            ...exerciseObject,
            ...updatedValue
        }));        
    };

    const handleSubmit = () => {
        if (exerciseObject.exerciseName !== '') {

            props.createExercise(exerciseObject)
                .unwrap()
                .then((data) => {
                //console.log(data);
                })
                .catch((e) => {
                console.log(e);
                });

        }
    }

    // handleDeleteExercise(id) {
    //     this.setState({
    //         exerciseArray: this.state.exerciseArray.filter((_, i) => i !== id)
    //     });
    // }

    // <div>
    //         <h1>Exercise</h1>
    //         <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
    //             <ExerciseForm  exerciseObject={this.state.exerciseObject} updateData={this.updateData} />
    //             <Button onClick={this.handleSubmit}> Submit</Button>
    //         </Card>
    //         <ExerciseList list={this.state.exerciseArray} handleDelete={this.handleDeleteExercise} />
    //     </div>

    return (
        <div>
            <h1>Exercise</h1>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <ExerciseForm  exerciseObject={exerciseObject} updateData={updateData} />
                <Button onClick={handleSubmit}> Submit</Button>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        exerciseArray: state.exerciseState.exerciseArray
    };
  }

export default connect(mapStateToProps, { createExercise })(Exercise)