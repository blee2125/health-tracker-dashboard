import {useEffect} from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { notify } from "../../../reducers/notificationSlice";

function WaterGoalNotification() {
    const waterGoal = useSelector((state) => state.healthGoalState.waterGoal)
    const glasses = useSelector((state) => state.waterState.glasses)
    const dispatch = useDispatch()
    const water = glasses.toString()
    
    function goalAcheived() {
        if (water < waterGoal.goal) {
            dispatch(notify({message: `Goal Progress: ${glasses} of ${waterGoal.goal} glasses`, type: 'secondary'}))
        } else if (waterGoal.goal === glasses.toString()) {
            dispatch(notify({message: `Goal Complete: ${waterGoal.goal} glasses`, type: 'success'}))
        }
    }

    useEffect(() => {
        goalAcheived()
        // eslint-disable-next-line
    }, [water])

}

export default connect(null, {notify}) (WaterGoalNotification)