import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Card } from "react-bootstrap";
import { deleteAllWater } from "../../../reducers/waterSlice";
import { deleteAllWeight } from "../../../reducers/weightSlice";
import { deleteAllFood } from "../../../reducers/foodSlice";
import { deleteAllExercise } from "../../../reducers/exerciseSlice";
import DeleteConfirmation from "../../../views/DeleteConfirmation";
import { deleteUser } from "../../../reducers/userSlice";
import { deleteSettings } from "../../../reducers/settingsSlice";


const DeleteData = (props) => {
    const userToken = useSelector((state) => state.userState.user.token)
    const navigate = useNavigate();

    const deleteWaterData = () => {
        props.deleteAllWater(userToken)
    }

    const deleteWeightData = () => {
        props.deleteAllWeight(userToken)
    }

    const deleteFoodData = () => {
        props.deleteAllFood(userToken)
    }

    const deleteExerciseData = () => {
        props.deleteAllExercise(userToken)
    }

    const deleteAccountData = () => {
        props.deleteAllExercise(userToken)
        props.deleteAllFood(userToken)
        props.deleteAllWater(userToken)
        props.deleteAllWeight(userToken)
        props.deleteSettings(userToken)
        props.deleteUser(userToken)
        navigate('/register')
    }

    return (
        <>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <h2>Delete Data</h2>
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                Food Data
                            </td>
                            <td>
                                <DeleteConfirmation 
                                    deleteItem={() => deleteFoodData(userToken)} 
                                    info={'All Food Data'} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Exercise Data
                            </td>
                            <td>
                                <DeleteConfirmation 
                                deleteItem={() => deleteExerciseData(userToken)} 
                                info={'All Exercise Data'} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Water Data
                            </td>
                            <td>
                                <DeleteConfirmation 
                                    deleteItem={() => deleteWaterData(userToken)} 
                                    info={'All Water Data'} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Weight Data
                            </td>
                            <td>
                                <DeleteConfirmation 
                                    deleteItem={() => deleteWeightData(userToken)} 
                                    info={'All Weight Data'} 
                                />
                            </td>
                        </tr>  
                        <tr>
                            <td>
                                Account User Data
                            </td>
                            <td>
                                <DeleteConfirmation 
                                    deleteItem={() => deleteAccountData(userToken)} 
                                    info={'Account User Data'} 
                                />
                            </td>
                        </tr>                
                    </tbody>
                </Table>
            </Card>
        </>
    )
}

export default connect(null, {deleteAllWater, deleteAllExercise, deleteAllFood, deleteAllWeight, deleteUser, deleteSettings}) (DeleteData)