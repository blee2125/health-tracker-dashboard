import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getCurrentWeight } from "../../../reducers/weightSlice";

function WeightHome(props) {
  const userToken = useSelector((state) => state.userState.user.token)
  const weight = useSelector((state) => state.weightState.currentWeight.weight)
  const height = useSelector((state) => state.userState.user.height)

  const calcBMI = () => {
    const bmi = (weight/(height*height))*703
    return bmi.toFixed(1)
  }

  const getCurrent = () => {
    props.getCurrentWeight(userToken)
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
  }, [])

  return (
    <div>
      <Card bg='light' border="secondary" style={{ width: '275px', padding: '25px', margin: "25px"}}>
        <h3>Current Weight</h3>
        <p>{weight} pounds</p>

        <h3>Body Mass Index</h3>
        <p>{calcBMI()}</p>
      </Card>
    </div>
  )
}

export default connect(null, {getCurrentWeight})(WeightHome)