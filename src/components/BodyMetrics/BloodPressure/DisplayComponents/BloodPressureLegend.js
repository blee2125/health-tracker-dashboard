import React from "react";
import { Table, Card } from "react-bootstrap";

const BloodPressureLegend = () => {

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
            <h4>Legend</h4>
            <Table>
                <thead>
                    <tr>
                        <td>BLOOD PRESSURE CATEGORY</td>
                        <td>SYSTOLIC mm Hg</td>
                        <td>and/or</td>
                        <td>DIASTOLIC mm Hg</td>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{background: 'lightgreen'}}>
                        <td>NORMAL</td>
                        <td>LESS THAN 120</td>
                        <td>and</td>
                        <td>LESS THAN 80</td>
                    </tr>
                    <tr style={{background: 'yellow'}}>
                        <td>ELEVATED</td>
                        <td>120 – 129</td>
                        <td>and</td>
                        <td>LESS THAN 80</td>
                    </tr>
                    <tr style={{background: 'orange'}}>
                        <td>HIGH BLOOD PRESSURE (HYPERTENSION) STAGE 1</td>
                        <td>130 – 139</td>
                        <td>or</td>
                        <td>80 – 89</td>
                    </tr>
                    <tr style={{background: 'orangered'}}>
                        <td>HIGH BLOOD PRESSURE (HYPERTENSION) STAGE 2</td>
                        <td>140 OR HIGHER</td>
                        <td>or</td>
                        <td>90 OR HIGHER</td>
                    </tr>
                    <tr style={{background: 'red'}}>
                        <td>HYPERTENSIVE CRISIS (consult your doctor immediately)</td>
                        <td>HIGHER THAN 180</td>
                        <td>and/or</td>
                        <td>HIGHER THAN 120</td>
                    </tr>
                </tbody>
            </Table>
            </Card>
        </div>
    )
}

export default (BloodPressureLegend)