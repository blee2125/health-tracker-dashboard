import React from "react";
import DeleteConfirmation from "../../../Views/DeleteConfirmation";

function HeartRateListItem(props) {

    return (
        <tr>
            <td>{props.heartRate.heartRate}</td>
            <td>{props.heartRate.time}</td>
            <td>            
                <DeleteConfirmation 
                    deleteItem={() => props.deleteButton(props.heartRate._id)} 
                    info={props.heartRate.heartRate} 
                />
            </td>
        </tr>
    );
}

export default HeartRateListItem;