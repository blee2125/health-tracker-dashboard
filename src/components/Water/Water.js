import React, {useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import {Card, Button, ButtonGroup} from 'react-bootstrap';
import { createWater, updateWater, getWaterByDate, waterDailyReset } from "../../reducers/waterSlice";
import DateFunctions from "../../functions/DateFunctions";

function Water(props) {
  const glasses = useSelector((state) => state.waterState.glasses)
  const id = useSelector((state) => state.waterState.id)
  const objDate = useSelector((state) => state.waterState.date)
  const userToken = useSelector((state) => state.userState.user.token)
  const dateStringSplit = DateFunctions.createDateStringSplit()
  const dispatch = useDispatch()

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

  const handleGetTodayRequest = () => {
    props.getWaterByDate({date: {'time': dateStringSplit}, token: userToken})
    .unwrap()
    .then((data) => {})
    .catch((e) => {console.log(e)});
  }

  const matchDates = (objDate, dateStringSplit) => {
    if (objDate !== dateStringSplit) {
      dispatch(waterDailyReset)
    }
  }

  useEffect(() => {
    handleGetTodayRequest()
    matchDates(objDate, dateStringSplit)
    //console.log(objDate, dateStringSplit)
    // eslint-disable-next-line
  }, [dateStringSplit])

  return (
    <>
      <Card bg='light' border="secondary" style={{ width: '200px', height: '200px', padding: '25px', margin: "25px"}}>
        <h1>Water</h1>
        <p>{ glasses }<br></br> Glasses (8oz)</p>
        <ButtonGroup>       
          {glasses > 0 ? <Button variant="danger" onClick={handleSubtractGlasses}>-</Button> : <Button onClick={handleSubtractGlasses} variant="secondary" disabled>-</Button>}
          <Button onClick={handleAddGlasses}>+</Button>
        </ButtonGroup> 
      </Card>
    </>
  )
}

export default connect(null, { createWater, updateWater, getWaterByDate, waterDailyReset })(Water)