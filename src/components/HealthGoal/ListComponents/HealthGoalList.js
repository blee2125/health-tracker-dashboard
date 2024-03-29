import React from "react";
import { Table, Card } from "react-bootstrap";
import HealthGoalListItem from "./HealthGoalListItem";

function HealthGoalList(props) { 
    const listHealthGoals = props.list.map((healthGoal, index) => {
        return (
            <HealthGoalListItem healthGoal={healthGoal} key={index} id={index} deleteButton={props.handleDelete} editButton={props.handleEdit}/>
        )
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h2>{props.listTitle ? props.listTitle : "Goal List"}</h2>
            {props.addModal ? props.addModal : ''}
            {props.listFilter ? props.listFilter : ''}
            <div className="tablescrollable">
            <Table>
                <thead>
                    <tr>
                        <td><b>Category</b></td>
                        <td><b>Goal</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {listHealthGoals}
                </tbody>
            </Table>
            </div>
        </Card>
    );
}

export default HealthGoalList;