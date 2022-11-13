import React from "react";
import DeleteConfirmation from "../../../Views/DeleteConfirmation";

function SleepListItem(props) {

    return (
        <tr>
            <td>{props.sleep.bedtime}</td>
            <td>{props.sleep.wakeUpTime}</td>
            <td>            
                <DeleteConfirmation 
                    deleteItem={() => props.deleteButton(props.sleep._id)} 
                    info={props.sleep.bedtime+' '+props.sleep.wakeUpTime} 
                />
            </td>
        </tr>
    );
}

export default SleepListItem;