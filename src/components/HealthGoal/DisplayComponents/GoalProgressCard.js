import React from "react";
import { Card } from "react-bootstrap";

function GoalProgressCard(props) {

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '200px', height: '200px', padding: '25px', margin: "25px"}}>
                <h4>{props.title}</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                
                            </td>
                            <td>
                                {props.goalUnit}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Total
                            </td>
                            <td>
                                {props.total}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Goal
                            </td>
                            <td>
                                {props.goal}
                            </td>
                        </tr>
                        {props.total >= props.goal ?
                        <tr>
                            <td>
                                <b>Remaining</b>
                            </td>
                            <td>
                                {props.goal - props.total}
                            </td>
                        </tr> :
                        <tr>
                            <td>
                            <b>Over Goal</b>
                            </td>
                            <td>
                                {props.total - props.goal}
                            </td>
                        </tr>
                        }
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default (GoalProgressCard)