import React from "react";
import { connect } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";
import { createWeight, updateNewTime, updateNewWeight } from "../../../reducers/weightSlice";
import { useSelector, useDispatch } from "react-redux";

export const WeightForm = (props) => {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.userState.user.token)
    const weight = useSelector((state) => state.weightState.newWeight.weight)
    const time = useSelector((state) => state.weightState.newWeight.time)

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.createWeight({data: {weight: weight, time: time}, token: userToken})
            .unwrap()
            .then((data) => {
                console.log(data)
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const changeWeight = (e) => {
        dispatch(updateNewWeight(e.target.value))
    }

    const changeTime = (e) => {
        dispatch(updateNewTime(e.target.value))
    }

    return (
        <Card bg='light' border="secondary" style={{ width: '400px', padding: '25px', margin: "25px"}}>
            <h2>Add Weight</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Weight" 
                    onChange={changeWeight}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupWeightTime">
                <Form.Label>Time</Form.Label>
                <Form.Control 
                    type="time" 
                    placeholder="Time" 
                    onChange={changeTime}
                />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Card>
    );
}

export default connect(null, {createWeight, updateNewTime, updateNewWeight}) (WeightForm);