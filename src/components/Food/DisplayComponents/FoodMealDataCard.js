import React from "react";
import { Table, Card } from "react-bootstrap";

function FoodMealDataCard(props) {

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '200px', padding: '25px', margin: "5px"}}>
                <h4>{props.meal}</h4>
            <Table>
                <tbody>
                    <tr>
                        <td>Calories</td>
                        <td>{props.calories}</td>
                    </tr>
                    <tr>
                        <td>Carbs</td>
                        <td>{props.carbs}</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>{props.fat}</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>{props.protein}</td>
                    </tr>
                </tbody>
            </Table>
            </Card>
        </div>
    )
}

export default FoodMealDataCard