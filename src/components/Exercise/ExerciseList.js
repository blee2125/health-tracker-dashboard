import React from "react";
import { Table } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


import ExerciseListItem from "./ExerciseListItem";

function ExerciseList(props) {
    
    const listExerciseItems = props.list.map((exerciseItem, index) => {
        return (
            <ExerciseListItem exerciseData={exerciseItem} key={index} id={index} deleteButton={props.handleDelete} editButton={props.handleEdit}/>
        )
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            Exercise List
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
        </Card>
    );
  }

export default ExerciseList;