import React from "react";
import DeleteConfirmation from "../../../Views/DeleteConfirmation";

function BloodPressureListItem(props) {

    const backgroundColor = () => {
        const upper = props.bloodPressure.systolic
        const lower = props.bloodPressure.diastolic
        if (upper >= 180 || lower >= 120) {
            return 'red'
        } else if ((upper >= 140 & upper < 180) || (lower >= 90 & lower < 120)) {
            return 'orangered'
        } else if ((upper >= 130 & upper < 140) || (lower >= 80 & lower < 90)) {
            return 'orange'
        } else if (upper >= 120 & upper < 130 & lower < 80) {
            return 'yellow'
        } else if (upper < 120 & lower < 80) {
            return 'lightgreen'
        }
    }

    return (
        <tr style={{background: backgroundColor()}}>
            <td>{props.bloodPressure.systolic}</td>
            <td>{props.bloodPressure.diastolic}</td>
            <td>{props.bloodPressure.heartRate}</td>
            <td>{props.bloodPressure.time}</td>
            <td>            
                <DeleteConfirmation 
                    deleteItem={() => props.deleteButton(props.bloodPressure._id)} 
                    info={props.bloodPressure.heartRate} 
                />
            </td>
        </tr>
    );
}

export default BloodPressureListItem;