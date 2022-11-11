import React from "react";
import { useSelector } from "react-redux";
import GoalProgressCard from "./GoalProgressCard";

function FoodGoalProgress() {
    const foodGoal = useSelector((state) => state.healthGoalState.foodGoal.goal)
    const foodTodayArray = useSelector((state) => state.foodState.foodTodayArray)

    const calcTotal = foodTodayArray.reduce((accumulator, food) => {
        const cal = food.calories > 0 ? Math.round(food.calories) : 0
        return (accumulator + cal);
    }, 0);

    return (
        <div>
            <GoalProgressCard
                title={'Daily Calories'}
                goalUnit={'Calories'}
                goal={foodGoal}
                total={calcTotal}
            />
        </div>
    )
}

export default (FoodGoalProgress)