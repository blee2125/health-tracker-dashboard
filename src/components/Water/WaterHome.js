import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import { getWaterByDate, getSevenDays } from "../../reducers/waterSlice";
import WaterBarGraph from "./WaterBarGraph";
import DateFunctions from "../../functions/DateFunctions";
import Water from "./Water";
import { Row } from "react-bootstrap";

function WaterHome(props) {
  const glasses = useSelector((state) => state.waterState.glasses)
  const userToken = useSelector((state) => state.userState.user.token)
  const sevenDays = useSelector((state) => state.waterState.waterArray7days)
  const dateStringSplit = DateFunctions.createDateStringSplit()

  const handleGetTodayRequest = () => {
    props.getWaterByDate({date: {'time': dateStringSplit}, token: userToken})
    .unwrap()
    .then((data) => {})
    .catch((e) => {console.log(e)});
  }

  const get7days = () => {
    props.getSevenDays(userToken)
    .unwrap()
    .then((data) => {})
    .catch((e) => {console.log(e)});
  }

  useEffect(() => {
    handleGetTodayRequest()
    get7days()
    // eslint-disable-next-line
  }, [glasses])

  return (
    <Row>
      <Water />
      <WaterBarGraph sevenDaysData={sevenDays} />
    </Row>
  )
}

export default connect(null, { getWaterByDate, getSevenDays })(WaterHome)