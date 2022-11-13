import React from "react";
import { Table, Card } from "react-bootstrap";
import ExerciseListItem from "./ExerciseListItem";

function ExerciseList(props) { 
    const listExerciseItems = props.list.map((exerciseItem, index) => {
        return (
            <ExerciseListItem 
                exerciseData={exerciseItem} 
                key={index} 
                id={exerciseItem._id} 
                deleteButton={props.handleDelete} 
            />
        )
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h2>{props.listTitle ? props.listTitle : "Exercise List"}</h2>
            {props.addModal ? props.addModal : ''}
            <div className="tablescrollable">
            <Table>
                <thead>
                    <tr>
                        <td><b>NAME</b></td>
                        <td><b>DURATION</b></td>
                        <td><b>TIME</b></td>
                        <td><b>TYPE</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {listExerciseItems}
                </tbody>
            </Table>
            </div>
        </Card>
    );
}

export default ExerciseList;