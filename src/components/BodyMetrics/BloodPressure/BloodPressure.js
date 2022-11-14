import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getAllBloodPressure, deleteBloodPressure } from "../../../reducers/bloodPressureSlice";
import BloodPressureList from "./ListComponents/BloodPressureList";
import BloodPressureLegend from "./DisplayComponents/BloodPressureLegend";

function BloodPressure(props) {
  const userToken = useSelector((state) => state.userState.user.token)
  const bpArray = useSelector((state) => state.bloodPressureState.bloodPressureArray)

  const getCurrent = () => {
    props.getAllBloodPressure(userToken)
    .unwrap()
    .then((data) => {})
    .catch((e) => {console.log(e)});
  }

  const handleDelete = (id) => {
    props.deleteBloodPressure({id: id, userToken: userToken})
        .unwrap()
        .then((data) => {})
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
        <BloodPressureLegend/>
        <BloodPressureList 
          list={bpArray}
          listTitle={'Blood Pressure'}
          handleDelete={handleDelete} 
        />
      
    </div>
  )
}

export default connect(null, { getAllBloodPressure, deleteBloodPressure })(BloodPressure)