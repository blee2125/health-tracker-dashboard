import React from "react";
import { Table, Card } from "react-bootstrap";
import HeartRateListItem from "./HeartRateListItem";

function HeartRateList(props) { 
    const listHeartRate = props.list.map((hr, index) => {
        if (props.list.length > 0) {
            return (
                <HeartRateListItem heartRate={hr} key={index} id={index} deleteButton={props.handleDelete}/>
            )
        } else {
            return []
        }
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h2>{props.listTitle ? props.listTitle : "HR List"}</h2>
            {props.addModal ? props.addModal : ''}
            {props.listFilter ? props.listFilter : ''}
            <div className="tablescrollable">
            <Table>
                <thead>
                    <tr>
                        <td><b>HR</b></td>
                        <td><b>Time</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {listHeartRate}
                </tbody>
            </Table>
            </div>
        </Card>
    );
}

export default HeartRateList;