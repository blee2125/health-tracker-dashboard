import {useEffect} from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { notify } from "../../../reducers/notificationSlice";

function WeightGoalNotification() {
    const weightGoal = Number(useSelector((state) => state.healthGoalState.weightGoal.goal))
    const weight = useSelector((state) => state.weightState.currentWeight.weight)
    const dispatch = useDispatch()
    
    function goalAcheived() {
        if (weightGoal > 0) {
            if (weight > weightGoal) {
                dispatch(notify({message: `Goal Progress: ${weight} of ${weightGoal} pounds`, type: 'secondary'}))
            } else if (weightGoal === weight) {
                dispatch(notify({message: `Goal Complete: ${weightGoal} pounds`, type: 'success'}))
            }  else if (weightGoal > weight) {
                dispatch(notify({message: `Below Weight: ${weight} pounds`, type: 'secondary'}))
            }
        }
    }

    useEffect(() => {
        goalAcheived()
        // eslint-disable-next-line
    }, [weight])

}

export default connect(null, {notify}) (WeightGoalNotification)