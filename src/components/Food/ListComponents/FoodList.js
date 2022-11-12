import React from "react";
import { Table, Card } from "react-bootstrap";
import FoodListItem from "./FoodListItem";
import FoodListTotalCalories from "./FoodListTotalCalories";
import FoodListTotalMacros from "./FoodListTotalMacros";

function FoodList(props) {
    const filteredByMeal = props.list.filter((foodItem) => {
        if (!props.meal) {
            return foodItem
        } else if (foodItem.meal === props.meal) {
            return foodItem
        } else {
            return null
        }
    })
    const listFoodItems = filteredByMeal.map((foodItem, index) => {
        return (
            <FoodListItem 
                foodData={foodItem} 
                key={index} 
                id={foodItem._id} 
                deleteButton={props.handleDelete} 
            />
        )
    })


    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h2>{props.listTitle ? props.listTitle : "Food List"}</h2>
            {props.addModal ? props.addModal : ''}
            <div className="tablescrollable">
                <Table>
                    <thead>
                        <tr>
                            <th><b>NAME</b></th>
                            <th><b>CALORIES</b></th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {listFoodItems}
                    </tbody>
                </Table>
            </div>
            <FoodListTotalCalories list={filteredByMeal}/>
            <FoodListTotalMacros list={filteredByMeal} />
        </Card>
    );
}

export default FoodList;