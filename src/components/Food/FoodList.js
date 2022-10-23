import React from "react";
import { Table, Card } from "react-bootstrap";
import FoodListItem from "./FoodListItem";

function FoodList(props) {
    const listFoodItems = props.list.map((foodItem, index) => {
        return (
            <FoodListItem foodData={foodItem} key={index} id={index} deleteButton={props.handleDelete} editButton={props.handleEdit} />
        )
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h2>Food List</h2>
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
        </Card>
    );
}

export default FoodList;