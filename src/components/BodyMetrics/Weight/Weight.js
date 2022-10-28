import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import WeightForm from "./WeightForm";
import { getCurrentWeight } from "../../../reducers/weightSlice";

function BodyWeight(props) {
  const userToken = useSelector((state) => state.userState.user.token)
  const weight = useSelector((state) => state.weightState.currentWeight.weight)

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
      <Card bg='light' border="secondary" style={{ width: '200px', padding: '25px', margin: "25px"}}>
        <h2>Current Weight</h2>
        
        <p>{weight} pounds</p>

      </Card>
      <WeightForm userToken={userToken}/>
    </div>
  )
}

export default connect(null, {getCurrentWeight})(BodyWeight)