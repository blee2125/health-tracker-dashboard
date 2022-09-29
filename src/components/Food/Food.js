import React from "react";
import Card from 'react-bootstrap/Card';

import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

export default class Food extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foodObject: {
                foodName: "",
                totalCalories: "150",
                timeOfConsumption: "",
                meal: "",
                placeOfConsumption: "",
                withWhom: "",
                activity: "",
                mood: "",
                hungerLevel: "",
                fullness: "",
                amount: ""
            },
            foodArray: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteFood = this.handleDeleteFood.bind(this);
    }

    updateData = (target, value) => {
        this.setState(({
            foodObject: {
                ...this.state.foodObject,
                [target]: value
            }
        }));
    };

    handleSubmit = () => {
        if (this.state.foodObject.foodName !== '') {
            this.setState(prevState => ({
                foodArray: [...prevState.foodArray, this.state.foodObject]
            }))
        }
    }

    handleDeleteFood(id) {
        this.setState({
            foodArray: this.state.foodArray.filter((_, i) => i !== id)
        });
    }

    render() {
      return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
        
            <h1>Food</h1>
            <p>form</p>
            <FoodForm foodObject={this.state.foodObject} updateData={this.updateData}/>
            <button onClick={this.handleSubmit}> Submit</button>

            <p>list</p>
            name: {this.state.foodObject.foodName}
            <FoodList list={this.state.foodArray} handleDelete={this.handleDeleteFood} />
        </Card>
      )
    }
}