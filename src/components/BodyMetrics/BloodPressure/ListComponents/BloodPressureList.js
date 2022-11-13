import React from "react";
import { Table, Card } from "react-bootstrap";
import BloodPressureListItem from "./BloodPressureListItem";

function BloodPressureList(props) { 
    const listBP = props.list.map((bp, index) => {
        if (props.list.length > 0) {
            return (
                <BloodPressureListItem bloodPressure={bp} key={index} id={index} deleteButton={props.handleDelete}/>
            )
        } else {
            return []
        }
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h2>{props.listTitle ? props.listTitle : "BP List"}</h2>
            {props.addModal ? props.addModal : ''}
            {props.listFilter ? props.listFilter : ''}
            <div className="tablescrollable">
            <Table>
                <thead>
                    <tr>
                    <td><b>Upper/Systolic</b></td>
                    <td><b>Lower/Diastolic</b></td>
                    <td><b>HR</b></td>
                        <td><b>Time</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {listBP}
                </tbody>
            </Table>
            </div>
        </Card>
    );
}

export default BloodPressureList;