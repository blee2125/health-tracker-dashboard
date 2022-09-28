import React from "react";


export default class Exercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exerciseObject: {
                exerciseName: "",
                duration: "150",
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
      <div>
        
        <h1>Exercise</h1>
        
      </div>
      )
    }
}