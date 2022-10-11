import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

import { connect } from "react-redux";
import { createWater } from "../../reducers/waterSlice";

function Water(props) {
  const [glasses, setGlasses] = useState(0);

  const handleAddGlasses = () => {
    setGlasses(glasses + 1);
  };

  const handleSubtractGlasses = () => {
    setGlasses(glasses - 1);
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

  return (
    <Card bg='light' border="secondary" style={{ width: '200px', padding: '25px', margin: "25px"}}>
      <h1>Water</h1>
      <button onClick={handlePostRequest}>post</button>
      <p>{ glasses }<br></br> glasses</p>
      <button onClick={handleAddGlasses}>+</button>
      <button onClick={handleSubtractGlasses}>-</button>
    </Card>
  )
}

export default connect(null, { createWater })(Water)