import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import {Card, Button, ButtonGroup} from 'react-bootstrap';
import { createWater, updateWater, getWaterByDate } from "../../reducers/waterSlice";

function WaterHome(props) {
  const glasses = useSelector((state) => state.waterState.glasses)
  const id = useSelector((state) => state.waterState.id)
  const userToken = useSelector((state) => state.userState.user.token)

  const dateString = new Date().toString().split(' ')
  const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

  const handleAddGlasses = () => {
    if (id === null || undefined) {
      handlePostRequest()
    } else {
    props.updateWater({id: id, data: {glasses: glasses+1}, token: userToken})
      .unwrap()
      .then((data) => {
        
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };

  const handleSubtractGlasses = () => {
    props.updateWater({id: id, data: {glasses: glasses-1}, token: userToken})
      .unwrap()
      .then((data) => {
        
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handlePostRequest = () => {
    props.createWater({data: {glasses: glasses + 1, date: dateStringSplit}, token: userToken})
      .unwrap()
      .then((data) => {
        
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleGetTodayRequest = () => {
    props.getWaterByDate({date: {'time': dateStringSplit}, token: userToken})
      .unwrap()
      .then((data) => {
        
      })
      .catch((e) => {
        console.log(e);
        if (e.typeof === undefined) {
          //handlePostRequest()
        }
      });
  }

  useEffect(() => {
    handleGetTodayRequest()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Card bg='light' border="secondary" style={{ width: '200px', padding: '25px', margin: "25px"}}>
        <h1>Water</h1>
        <p>{ glasses }<br></br> Glasses (8oz)</p>
        <ButtonGroup>       
          {glasses > 0 ? <Button onClick={handleSubtractGlasses}>-</Button> : <Button onClick={handleSubtractGlasses} disabled>-</Button>}
          <Button onClick={handleAddGlasses}>+</Button>
        </ButtonGroup> 
      </Card>
    </>
  )
}

export default connect(null, { createWater, updateWater, getWaterByDate })(WaterHome)