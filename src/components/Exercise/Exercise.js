import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ExerciseList";

export default class Exercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exerciseObject: {
                exerciseName: "",
                duration: "",
                timeOfExercise: "",
                typeOfExercise: ""
            },
            exerciseArray: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteExercise = this.handleDeleteExercise.bind(this);
    }

    updateData = (target, value) => {
        this.setState(({
            exerciseObject: {
                ...this.state.exerciseObject,
                [target]: value
            }
        }));
    };

    handleSubmit = () => {
        if (this.state.exerciseObject.exerciseName !== '') {
            this.setState(prevState => ({
                exerciseArray: [...prevState.exerciseArray, this.state.exerciseObject]
            }))
        }
    }

    handleDeleteExercise(id) {
        this.setState({
            exerciseArray: this.state.exerciseArray.filter((_, i) => i !== id)
        });
    }

    render() {
      return (
        <div>
            <h1>Exercise</h1>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <ExerciseForm  exerciseObject={this.state.exerciseObject} updateData={this.updateData} />
                <Button onClick={this.handleSubmit}> Submit</Button>
            </Card>
            <ExerciseList list={this.state.exerciseArray} handleDelete={this.handleDeleteExercise} />
        </div>
      )
    }
}