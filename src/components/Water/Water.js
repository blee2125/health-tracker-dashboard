import React from "react";
//import { useState } from "react";
import Card from 'react-bootstrap/Card';

import { connect } from "react-redux";
import { createWater, updateWater, getWaterByDate } from "../../reducers/waterSlice";

import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line
import { increment, decrement } from "../../reducers/waterSlice";

import { useEffect } from 'react'

function Water(props) {
  //const [glasses, setGlasses] = useState(0);

  const glasses = useSelector((state) => state.waterState.glasses)
  const id = useSelector((state) => state.waterState.id)
  // eslint-disable-next-line
  const dispatch = useDispatch();

  const dateString = new Date().toString().split(' ')
  const dateStringSplit = (`${dateString[1]} ${dateString[2]} ${dateString[3]}`).toString()

  const handleAddGlasses = () => {
    //dispatch(increment())
    props.updateWater({id: id, data: {glasses: glasses+1}})
      .unwrap()
      .then((data) => {

      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSubtractGlasses = () => {
    //dispatch(decrement())
    props.updateWater({id: id, data: {glasses: glasses-1}})
      .unwrap()
      .then((data) => {

      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handlePostRequest = () => {
    props.createWater({glasses: glasses, date: dateStringSplit})
      .unwrap()
      .then((data) => {
        //console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  } //<button onClick={handlePostRequest}>post</button>

  // eslint-disable-next-line
  const handleUpdateRequest = () => {
    props.updateWater({id: id, data: {glasses}})
      .unwrap()
      .then((data) => {

      })
      .catch((e) => {
        console.log(e);
      });
  } //<button onClick={handleUpdateRequest}>update</button>

  const handleGetTodayRequest = () => {
    props.getWaterByDate({'time': dateStringSplit})
      .unwrap()
      .then((data) => {
        //console.log(data)
      })
      .catch((e) => {
        console.log(e);
        if (e.typeof === undefined) {
          handlePostRequest()
        }
      });
  } //<button onClick={handleGetTodayRequest}>today</button>

  useEffect(() => {
    handleGetTodayRequest()
    // eslint-disable-next-line
  }, [])

  return (
    <Card bg='light' border="secondary" style={{ width: '200px', padding: '25px', margin: "25px"}}>
      <h1>Water</h1>
      
      <p>{ glasses }<br></br> glasses</p>
      {id}
      <button onClick={handleAddGlasses}>+</button>
      <button onClick={handleSubtractGlasses}>-</button>
    </Card>
  )
}

export default connect(null, { createWater, updateWater, getWaterByDate })(Water)