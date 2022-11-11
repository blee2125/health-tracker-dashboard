import React from "react";
import { useSelector } from "react-redux";
import GoalProgressCard from "./GoalProgressCard";

function WaterGoalProgress() {
    const waterGoal = useSelector((state) => state.healthGoalState.waterGoal.goal)
    const glasses = useSelector((state) => state.waterState.glasses)

    return (
        <div>
            <GoalProgressCard
                title={'Daily Water'}
                goalUnit={'Glasses'}
                goal={waterGoal}
                total={glasses}
            />
        </div>
    )
}

export default (WaterGoalProgress)