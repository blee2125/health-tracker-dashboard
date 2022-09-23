import React from 'react';

export const AddWater = (props) => {


  return (
    <button onClick={() =>
        props.sign === "+" ? props.updateCount(1) : props.updateCount(-1)} >
        {props.sign}
    </button>
  );
}
