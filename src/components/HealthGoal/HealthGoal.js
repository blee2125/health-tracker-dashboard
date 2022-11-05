import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import HealthGoalList from "./HealthGoalList";
import { getAllHealthGoal, deleteHealthGoal } from "../../reducers/healthGoalSlice";
import HealthGoalAddModal from './FormComponents/HealthGoalAddModal'

function HealthGoal(props) {
    const userToken = useSelector((state) => state.userState.user.token)
    const healthGoalArray = useSelector((state) => state.healthGoalState.healthGoalArray)

    const handleDeleteHealthGoal = (id) => {
        props.deleteHealthGoal({id: id, userToken: userToken})
            .unwrap()
            .then((data) => {})
            .catch((e) => {
                console.log(e);
            });
    }

    useEffect(() => {
        props.getAllHealthGoal(userToken)
        // eslint-disable-next-line
      }, [])

    return (
        <div>
            
            <h1>Goals</h1>
            <HealthGoalList 
                list={healthGoalArray}  
                handleDelete={handleDeleteHealthGoal}
                addModal={<HealthGoalAddModal />}
            />
        </div>
    )
}

export default connect(null, { getAllHealthGoal, deleteHealthGoal })(HealthGoal)