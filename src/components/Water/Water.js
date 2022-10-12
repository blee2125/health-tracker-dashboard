import React from "react";
//import { useState } from "react";
import Card from 'react-bootstrap/Card';

import { connect } from "react-redux";
import { createWater, updateWater } from "../../reducers/waterSlice";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../reducers/waterSlice";

function Water(props) {
  //const [glasses, setGlasses] = useState(0);

  const glasses = useSelector((state) => state.waterState.glasses)
  const id = useSelector((state) => state.waterState.id)
  const dispatch = useDispatch();

  const handleAddGlasses = () => {
    dispatch(increment())
    //setGlasses(glasses + 1);
  };

  const handleSubtractGlasses = () => {
    dispatch(decrement())
    //setGlasses(glasses - 1);
  };

  const handlePostRequest = () => {
    props.createWater({glasses: glasses})
      .unwrap()
      .then((data) => {

        //console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const handleUpdateRequest = () => {
    props.updateWater({id: id, data: {glasses}})
      .unwrap()
      .then((data) => {

      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Card bg='light' border="secondary" style={{ width: '200px', padding: '25px', margin: "25px"}}>
      <h1>Water</h1>
      <button onClick={handlePostRequest}>post</button>
      <button onClick={handleUpdateRequest}>update</button>
      <p>{ glasses }<br></br> glasses</p>
      {id}
      <button onClick={handleAddGlasses}>+</button>
      <button onClick={handleSubtractGlasses}>-</button>
    </Card>
  )
}

export default connect(null, { createWater, updateWater })(Water)