import React from "react";
import DeleteConfirmation from "../../../Views/DeleteConfirmation";

function BloodPressureListItem(props) {

    return (
        <tr>
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