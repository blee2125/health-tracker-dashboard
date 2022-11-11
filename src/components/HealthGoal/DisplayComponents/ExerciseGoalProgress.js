import React from "react";
import { useSelector } from "react-redux";
import GoalProgressCard from "./GoalProgressCard";

function ExerciseGoalProgress() {
    const exerciseGoal = useSelector((state) => state.healthGoalState.exerciseGoal.goal)
    const exerciseTodayArray = useSelector((state) => state.exerciseState.exerciseTodayArray)

    const calcTotal = exerciseTodayArray.reduce((accumulator, exercise) => {
        const dur = exercise.duration > 0 ? Math.round(exercise.duration) : 0
        return (accumulator + dur);
    }, 0);

    return (
        <div>
            <GoalProgressCard
                title={'Exercise'}
                goalUnit={'Minutes'}
                goal={exerciseGoal}
                total={calcTotal}
            />
        </div>
    )
}

export default (ExerciseGoalProgress)