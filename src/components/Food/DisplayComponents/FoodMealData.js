import React from "react";
import FoodMealDataCard from "./FoodMealDataCard";
import { Col, Row } from "react-bootstrap";
import FoodFunctions from "../../../functions/FoodFunctions";

function FoodMealData(props) {

    const calcTotalCalories = (array) => { return FoodFunctions.calcTotalCalories(array)}
    const calcTotalCarbs = (array) => { return FoodFunctions.calcTotalCarbs(array)}
    const calcTotalFat = (array) => { return FoodFunctions.calcTotalFat(array)}
    const calcTotalProtein = (array) => { return FoodFunctions.calcTotalProtein(array)}

    let calcTotal = (array, sumKey, filterValue) => { return FoodFunctions.calcTotalByMeal(array, sumKey, filterValue)}

    return (
        <div>
            <Row className="horiscroll">
            <Col className="horiscrollcol">
            <FoodMealDataCard
                meal={'All Meals'}
                calories={calcTotalCalories(props.foodData)}
                carbs={calcTotalCarbs(props.foodData)}
                fat={calcTotalFat(props.foodData)}
                protein={calcTotalProtein(props.foodData)}
            />
            </Col>
            <Col className="horiscrollcol">
            <FoodMealDataCard
                meal={'Breakfast'}
                calories={calcTotal(props.foodData, 'calories', 'Breakfast')}
                carbs={calcTotal(props.foodData, 'carbsg', 'Breakfast')}
                fat={calcTotal(props.foodData, 'fatg', 'Breakfast')}
                protein={calcTotal(props.foodData, 'proteing', 'Breakfast')}
            />
            </Col>
            <Col className="horiscrollcol">
            <FoodMealDataCard
                meal={'Lunch'}
                calories={calcTotal(props.foodData, 'calories', 'Lunch')}
                carbs={calcTotal(props.foodData, 'carbsg', 'Lunch')}
                fat={calcTotal(props.foodData, 'fatg', 'Lunch')}
                protein={calcTotal(props.foodData, 'proteing', 'Lunch')}
            />
            </Col>
            <Col className="horiscrollcol">
            <FoodMealDataCard
                meal={'Dinner'}
                calories={calcTotal(props.foodData, 'calories', 'Dinner')}
                carbs={calcTotal(props.foodData, 'carbsg', 'Dinner')}
                fat={calcTotal(props.foodData, 'fatg', 'Dinner')}
                protein={calcTotal(props.foodData, 'proteing', 'Dinner')}
            />
            </Col>
            <Col className="horiscrollcol">
            <FoodMealDataCard
                meal={'Snack'}
                calories={calcTotal(props.foodData, 'calories', 'Snack')}
                carbs={calcTotal(props.foodData, 'carbsg', 'Snack')}
                fat={calcTotal(props.foodData, 'fatg', 'Snack')}
                protein={calcTotal(props.foodData, 'proteing', 'Snack')}
            /></Col>
            </Row>
        </div>
    )
}

export default (FoodMealData)