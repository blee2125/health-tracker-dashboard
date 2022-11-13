import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getAllSleep, deleteSleep } from "../../../reducers/sleepSlice";
import SleepList from "./ListComponents/SleepList";

function Sleep(props) {
  const userToken = useSelector((state) => state.userState.user.token)
  const sleepList = useSelector((state) => state.sleepState.sleepArray)

  const getCurrent = () => {
    props.getAllSleep(userToken)
    .unwrap()
    .then((data) => {
      
    })
    .catch((e) => {console.log(e)});
  }

  const handleDelete = (id) => {
    props.deleteSleep({id: id, userToken: userToken})
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
        <h3>Sleep</h3>

      </Card>
      <SleepList list={sleepList} handleDelete={handleDelete}/>
    </div>
  )
}

export default connect(null, { getAllSleep, deleteSleep })(Sleep)