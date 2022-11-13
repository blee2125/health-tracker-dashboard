import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getAllHeartRate, deleteHeartRate } from "../../../reducers/heartRateSlice";
import HeartRateList from "./ListComponents/HeartRateList";

function HeartRate(props) {
  const userToken = useSelector((state) => state.userState.user.token)
  const heartRateList = useSelector((state) => state.heartRateState.heartRateArray)

  const getCurrent = () => {
    props.getAllHeartRate(userToken)
    .unwrap()
    .then((data) => {
      
    })
    .catch((e) => {console.log(e)});
  }

  const handleDelete = (id) => {
    props.deleteHeartRate({id: id, userToken: userToken})
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
        <h3>Heart Rate</h3>

      </Card>
      <HeartRateList list={heartRateList} handleDelete={handleDelete}/>
    </div>
  )
}

export default connect(null, { getAllHeartRate, deleteHeartRate })(HeartRate)