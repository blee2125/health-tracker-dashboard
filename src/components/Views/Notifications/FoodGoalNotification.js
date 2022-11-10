import {useEffect} from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { notify } from "../../../reducers/notificationSlice";

function FoodGoalNotification() {
    const foodGoal = useSelector((state) => state.healthGoalState.foodGoal)
    const foodTodayArray = useSelector((state) => state.foodState.foodTodayArray)
    const dispatch = useDispatch()

    const calcTotal = foodTodayArray.reduce((accumulator, food) => {
        const cal = food.calories > 0 ? Math.round(food.calories) : 0
        return (accumulator + cal);
    }, 0);
    
    function maxCal() {
        if (calcTotal < foodGoal.goal) {
            dispatch(notify({message: `Remaining Calories: ${foodGoal.goal - calcTotal} of ${foodGoal.goal} calories`, type: 'success'}))
        } else if (foodGoal.goal < calcTotal) {
            dispatch(notify({message: `Over Calorie Limit: ${calcTotal - foodGoal.goal} calories`, type: 'danger'}))
        }
    }

    useEffect(() => {
        if (foodGoal.goal > 0) {
            maxCal()
        }
        // eslint-disable-next-line
    }, [foodTodayArray])

}

export default connect(null, {notify}) (FoodGoalNotification)