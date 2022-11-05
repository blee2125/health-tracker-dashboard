import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import HealthGoalList from "./HealthGoalList";
import { getAllHealthGoal, deleteHealthGoal } from "../../reducers/healthGoalSlice";
import HealthGoalAddModal from './FormComponents/HealthGoalAddModal'
import ListCompletedFilter from "./ListComponents/ListCompletedFilter";

function HealthGoal(props) {
    const userToken = useSelector((state) => state.userState.user.token)
    const healthGoalArray = useSelector((state) => state.healthGoalState.healthGoalArray)
    const [goalCompletedFilter, setGoalCompletedFilter] = useState('In Progress')

    const handleDeleteHealthGoal = (id) => {
        props.deleteHealthGoal({id: id, userToken: userToken})
            .unwrap()
            .then((data) => {})
            .catch((e) => {console.log(e)});
    }

    function filterCompleted() {
        const completeList = []
        healthGoalArray.forEach(element => {
            if (goalCompletedFilter === 'Completed') {
                if (element.completed === true) {
                    completeList.push(element)
                }
            } else if (goalCompletedFilter === 'In Progress') {
                if (element.completed === false) {
                    completeList.push(element)
                }
            } else {
                completeList.push(element)
            }
        });
        return completeList
    }

    useEffect(() => {
        props.getAllHealthGoal(userToken)
        // eslint-disable-next-line
      }, [])

    return (
        <div>
            
            <h1>Goals</h1>
            <HealthGoalList 
                list={filterCompleted()}
                listFilter={<ListCompletedFilter goalCompletedFilter={goalCompletedFilter} setGoalCompletedFilter={setGoalCompletedFilter} />}
                handleDelete={handleDeleteHealthGoal}
                addModal={<HealthGoalAddModal />}
            />
        </div>
    )
}

export default connect(null, { getAllHealthGoal, deleteHealthGoal })(HealthGoal)