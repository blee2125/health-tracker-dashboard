import React, {useEffect, useState} from "react";
import { connect, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getCurrentWeight } from "../../../reducers/weightSlice";
import AddHeight from "../../User/AddHeight";
import { addHeight } from "../../../reducers/userSlice";
import AddWeight from "./AddWeight";

function WeightHome(props) {
  const userToken = useSelector((state) => state.userState.user.token)
  const weight = useSelector((state) => state.weightState.currentWeight.weight)
  const userHeight = useSelector((state) => state.userState.user.height)
  const [height, setHeight] = useState()
  const [bmi, setBmi] = useState()

  const calcBMI = () => {
    const bmiFormula = (weight/(userHeight*userHeight))*703
    if (bmiFormula > 0) {
      setBmi(bmiFormula.toFixed(1))
    } else {
      setBmi('Missing Data')    
    }
  }

  const getCurrent = () => {
    props.getCurrentWeight(userToken)
      .unwrap()
        .then((data) => {
          calcBMI()
        })
        .catch((e) => {
          console.log(e);
        });
  }

  const addHeight = () => {
    props.addHeight({data: {height: height}, userToken})
        .unwrap()
        .then((data) => {
            
        })
        .catch((e) => {
            console.log(e);
        });
  }

  useEffect(() => {
    getCurrent()
    // eslint-disable-next-line
  }, [weight, userHeight])

  return (
    <div>
      <Card bg='light' border="secondary" style={{ width: '275px', padding: '25px', margin: "25px"}}>
        <h3>Current Weight</h3>
        <p>{weight} pounds</p>

        <h3>Body Mass Index</h3>
        <p>{bmi}</p>
        {weight > 0 ? '' :
          <p>Weight - <AddWeight 
          /></p>}
        {userHeight > 0 ? '' :
          <p>Height - <AddHeight 
              addHeight={addHeight} 
              setHeight={setHeight} 
          /></p>}
      </Card>
    </div>
  )
}

export default connect(null, {getCurrentWeight, addHeight})(WeightHome)