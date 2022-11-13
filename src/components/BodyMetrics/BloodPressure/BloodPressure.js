import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getAllBloodPressure } from "../../../reducers/bloodPressureSlice";

function BloodPressure(props) {
  const userToken = useSelector((state) => state.userState.user.token)

  const getCurrent = () => {
    props.getAllBloodPressure(userToken)
    .unwrap()
    .then((data) => {
      
    })
    .catch((e) => {console.log(e)});
  }

  useEffect(() => {
    getCurrent()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Card bg='light' border="secondary" style={{ width: '275px', padding: '25px', margin: "25px"}}>
        <h3>Blood Pressure</h3>

      </Card>
    </div>
  )
}

export default connect(null, {getAllBloodPressure})(BloodPressure)