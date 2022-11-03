import React, {useEffect, useState} from "react";
import { connect, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getCurrentWeight } from "../../../reducers/weightSlice";
import AddHeight from "../../User/AddHeight";
import { addHeight } from "../../../reducers/userSlice";
import AddWeight from "./AddWeight";
import WeightFunctions from "../../../functions/WeightFunctions";

function BodyWeight(props) {
  const userToken = useSelector((state) => state.userState.user.token)
  const weight = useSelector((state) => state.weightState.currentWeight.weight)
  const userHeight = useSelector((state) => state.userState.user.height)
  const [height, setHeight] = useState()
  const [bmi, setBmi] = useState()

  const calcBMI = WeightFunctions.calcBMI(weight, userHeight)

  const getCurrent = () => {
    props.getCurrentWeight(userToken)
      .unwrap()
        .then((data) => {
          setBmi(calcBMI)
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
      <Card bg='light' border="secondary" style={{ width: '400px', padding: '25px', margin: "25px"}}>
        <h2>Current Weight</h2>
        
        <p>{weight} pounds</p>

        <h2>Body Mass Index</h2>

        <p>{bmi}</p>


        {weight > 0 ? '' : <p>No Weight - <AddWeight /></p>}
        {userHeight > 0 ? '' :
          <p>No Height - <AddHeight 
              addHeight={addHeight} 
              setHeight={setHeight} 
          /></p>}
      </Card>
    </div>
  )
}

export default connect(null, {getCurrentWeight, addHeight})(BodyWeight)