import React, {useEffect} from "react";
import { Button, ButtonGroup } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from "react-redux";
import { createWater, updateWater, getWaterByDate, waterDailyReset } from "../../reducers/waterSlice";
import DateFunctions from '../../functions/DateFunctions';

const WaterSidebar = (props) => {
    const glasses = useSelector((state) => state.waterState.glasses)
    const id = useSelector((state) => state.waterState.id)
    const userToken = useSelector((state) => state.userState.user ? state.userState.user.token : '')
    const dateStringSplit = DateFunctions.createDateStringSplit()
    const dispatch = useDispatch()
    const objDate = useSelector((state) => state.waterState.date)

    const handleAddGlasses = () => {
        if (id === null || undefined) {
          handlePostRequest()
        } else {
          props.updateWater({id: id, data: {glasses: glasses+1}, token: userToken})
          .unwrap()
          .then((data) => {})
          .catch((e) => {console.log(e)});
        }
    };

    const handleSubtractGlasses = () => {
        props.updateWater({id: id, data: {glasses: glasses-1}, token: userToken})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
    };
    
    const handlePostRequest = () => {
        props.createWater({data: {glasses: glasses + 1, date: dateStringSplit}, token: userToken})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
    }

    const matchDates = () => {
        if (objDate !== dateStringSplit) {
          dispatch(waterDailyReset())
        }
    }

    function minutesUntilMidnight() {
        var midnight = new Date();
        midnight.setHours( 24 );
        midnight.setMinutes( 0 );
        midnight.setSeconds( 0 );
        midnight.setMilliseconds( 0 );
        return ( midnight.getTime() - new Date().getTime() ) ;
    }

    useEffect(() => {
        const midnightmill = minutesUntilMidnight()
        const timer = setTimeout(() => {
            matchDates()
        }, (midnightmill+60000));
        return () => {clearTimeout(timer)};
        // eslint-disable-next-line
    })

    return (
        <ButtonGroup>
            {glasses > 0 ? <Button variant="danger"  onClick={handleSubtractGlasses}>-</Button> : <Button variant="secondary" onClick={handleSubtractGlasses} disabled>-</Button>}
            <Button variant="secondary" disabled>{glasses}</Button>
            <Button onClick={handleAddGlasses}>+</Button>
        </ButtonGroup>
    )
}

export default connect(null, { createWater, updateWater, getWaterByDate, waterDailyReset }) (WaterSidebar)