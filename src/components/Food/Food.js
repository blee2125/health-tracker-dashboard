import React, {useState} from "react";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";

export default class Food extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            foodObject: {
                name: "",
                calories: "150",
                timeOfConsumption: "",
                meal: "",
                quanity: ""
            },
            foodArray: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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
        if (this.state.foodObject.name !== '') {
            this.setState(prevState => ({
                foodArray: [...prevState.foodArray, {name: this.state.foodObject.name, id: this.state.foodArray.length + 1}]
            }))
        }
    }

    render() {
      return (
      <div>
        
        <h1>Food</h1>
        <p>form</p>
        <FoodForm foodObject={this.state.foodObject} updateData={this.updateData}/>
        <button onClick={this.handleSubmit}> Submit</button>

        <p>list</p>
        name: {this.state.foodObject.name}
        <FoodList list={this.state.foodArray} />
      </div>
      )
    }
}