import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import {Card, Button, ButtonGroup} from 'react-bootstrap';
import { createWater, updateWater, getWaterByDate, getSevenDays } from "../../reducers/waterSlice";
import WaterBarGraph from "./WaterBarGraph";
import DateFunctions from "../../functions/DateFunctions";

function Water(props) {
  const glasses = useSelector((state) => state.waterState.glasses)
  const id = useSelector((state) => state.waterState.id)
  const sevenDays = useSelector((state) => state.waterState.waterArray7days)
  const userToken = useSelector((state) => state.userState.user.token)

  const dateStringSplit = DateFunctions.createDateStringSplit()

  const handleAddGlasses = () => {
    //dispatch(increment())
    if (id === null || undefined) {
      handlePostRequest()
    } else {
    props.updateWater({id: id, data: {glasses: glasses+1}, token: userToken})
      .unwrap()
      .then((data) => {
        get7days()
      })
      .catch((e) => {
        console.log(e);
      });
    }
  };

  const handleSubtractGlasses = () => {
    //dispatch(decrement())
    props.updateWater({id: id, data: {glasses: glasses-1}, token: userToken})
      .unwrap()
      .then((data) => {
        get7days()
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handlePostRequest = () => {
    props.createWater({data: {glasses: glasses + 1, date: dateStringSplit}, token: userToken})
      .unwrap()
      .then((data) => {
        get7days()
      })
      .catch((e) => {
        console.log(e);
      });
  } //<button onClick={handlePostRequest}>post</button>

  // eslint-disable-next-line
  const handleUpdateRequest = () => {
    props.updateWater({id: id, data: {glasses}, token: userToken})
      .unwrap()
      .then((data) => {

      })
      .catch((e) => {
        console.log(e);
      });
  } //<button onClick={handleUpdateRequest}>update</button>

  const handleGetTodayRequest = () => {
    props.getWaterByDate({date: {'time': dateStringSplit}, token: userToken})
      .unwrap()
      .then((data) => {
        //console.log(data)
      })
      .catch((e) => {
        console.log(e);
        if (e.typeof === undefined) {
          //handlePostRequest()
        }
      });
  } //<button onClick={handleGetTodayRequest}>today</button>

  const get7days = () => {
    props.getSevenDays(userToken)
      .unwrap()
      .then((data) => {
        
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    handleGetTodayRequest()
    get7days()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Card bg='light' border="secondary" style={{ width: '200px', padding: '25px', margin: "25px"}}>
        <h1>Water</h1>
        <p>{ glasses }<br></br> Glasses (8oz)</p>
        <ButtonGroup>       
          {glasses > 0 ? <Button onClick={handleSubtractGlasses}>-</Button> : <Button onClick={handleSubtractGlasses} disabled>-</Button>}
          <Button onClick={handleAddGlasses}>+</Button>
        </ButtonGroup> 
      </Card>
      <WaterBarGraph sevenDaysData={sevenDays} />
    </div>
  )
}

export default connect(null, { createWater, updateWater, getWaterByDate, getSevenDays })(Water)