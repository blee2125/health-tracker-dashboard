import React from "react";
import { Button, ButtonGroup } from 'react-bootstrap';
import { connect, useSelector } from "react-redux";
import { createWater, updateWater, getWaterByDate } from "../../reducers/waterSlice";
import DateFunctions from '../../functions/DateFunctions';

const WaterSidebar = (props) => {
    const glasses = useSelector((state) => state.waterState.glasses)
    const id = useSelector((state) => state.waterState.id)
    const userToken = useSelector((state) => state.userState.user ? state.userState.user.token : '')
    const dateStringSplit = DateFunctions.createDateStringSplit()

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

    return (
        <ButtonGroup>
            {glasses > 0 ? <Button variant="danger"  onClick={handleSubtractGlasses}>-</Button> : <Button variant="secondary" onClick={handleSubtractGlasses} disabled>-</Button>}
            <Button variant="secondary" disabled>{glasses}</Button>
            <Button onClick={handleAddGlasses}>+</Button>
        </ButtonGroup>
    )
}

export default connect(null, { createWater, updateWater, getWaterByDate }) (WaterSidebar)