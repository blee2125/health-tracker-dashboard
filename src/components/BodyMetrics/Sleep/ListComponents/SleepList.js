import React from "react";
import { Table, Card } from "react-bootstrap";
import SleepListItem from "./SleepListItem";

function SleepList(props) { 
    const listSleep = props.list.map((sleep, index) => {
        if (props.list.length > 0) {
            return (
                <SleepListItem sleep={sleep} key={index} id={index} deleteButton={props.handleDelete}/>
            )
        } else {
            return []
        }
    })

    return (
        <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h2>{props.listTitle ? props.listTitle : "Sleep List"}</h2>
            {props.addModal ? props.addModal : ''}
            {props.listFilter ? props.listFilter : ''}
            <div className="tablescrollable">
            <Table>
                <thead>
                    <tr>
                        <td><b>Bedtime</b></td>
                        <td><b>Wake up time</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {listSleep}
                </tbody>
            </Table>
            </div>
        </Card>
    );
}

export default SleepList;