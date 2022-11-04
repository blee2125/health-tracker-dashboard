import React from "react";
import { Table, Card } from "react-bootstrap";
import FoodListItem from "./FoodListItem";
import FoodListTotalCalories from "./FoodListTotalCalories";
import FoodListTotalMacros from "./FoodListTotalMacros";

function FoodList(props) {
    const listFoodItems = props.list.map((foodItem, index) => {
        return (
            <FoodListItem foodData={foodItem} key={index} id={index} deleteButton={props.handleDelete} editButton={props.handleEdit} />
        )
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h2>{props.listTitle ? props.listTitle : "Food List"}</h2>
            <Table>
                <thead>
                    <tr>
                        <td><b>NAME</b></td>
                        <td><b>CALORIES</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {listFoodItems}
                </tbody>
            </Table>
            <FoodListTotalCalories list={props.list}/>
            <FoodListTotalMacros list={props.list} />
        </Card>
    );
}

export default FoodList;