import React from "react";
import { Card } from "react-bootstrap";

function GoalProgressCard(props) {

    const goalProgressCalc = () => {
        if (props.goal === '') {
            return (
                <tr>
                    <td colSpan={2}>
                        <b>No Goal</b>
                    </td>
                </tr>
            )
        } else if (props.goal >= props.total) {
            return (<tr>
                <td>
                    <b>Remaining</b>
                </td>
                <td>
                    {props.goal - props.total}
                </td>
            </tr>)
        } else {
            return (<tr>
                <td>
                    <b>Over Goal</b>
                </td>
                <td>
                    {props.total - props.goal}
                </td>
            </tr>)
        }
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '200px', height: '200px', padding: '25px', margin: "5px"}}>
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
                                {props.goal === '' ? '' : 'Goal'}
                            </td>
                            <td>
                                {props.goal}
                            </td>
                        </tr>
                        {goalProgressCalc()}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default (GoalProgressCard)