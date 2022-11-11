import React from "react";
import { useSelector } from "react-redux";
import GoalProgressCard from "./GoalProgressCard";

function WeightGoalProgress() {
    const weightGoal = useSelector((state) => state.healthGoalState.weightGoal.goal)
    const weight = useSelector((state) => state.weightState.currentWeight.weight)

    return (
        <div>
            <GoalProgressCard
                title={'Goal Weight'}
                goalUnit={'Pounds'}
                goal={weightGoal}
                total={weight}
            />
        </div>
    )
}

export default (WeightGoalProgress)