import React from "react";
import Card from 'react-bootstrap/Card';


export default class Exercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exerciseObject: {
                exerciseName: "",
                duration: "",
                timeOfExercise: "",
                typeOfExercise: "",
                mood: ""
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
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h1>Exercise</h1>
        
        </Card>
      )
    }
}