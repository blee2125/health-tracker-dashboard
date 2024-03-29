import React, {useState} from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { loginUser } from "../../reducers/userSlice";
import { getExerciseToday } from "../../reducers/exerciseSlice";
import { getWaterByDate } from "../../reducers/waterSlice";
import { getFoodToday } from "../../reducers/foodSlice";
import { getCurrentWeight } from "../../reducers/weightSlice";
import { getSettings } from "../../reducers/settingsSlice";
import DateFunctions from "../../functions/DateFunctions";
import { notify } from "../../reducers/notificationSlice";

function Login(props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dateStringSplit = DateFunctions.createDateStringSplit()

    const handleSubmit = async e => {
        e.preventDefault();
        props.loginUser({username, password})
        .unwrap()
        .then((data) => {
            props.getExerciseToday({date: dateStringSplit, token: data.token})
            props.getWaterByDate({date: {'time': dateStringSplit}, token: data.token})
            props.getFoodToday({date: dateStringSplit, token: data.token})
            props.getCurrentWeight(data.token)
            props.getSettings(data.token)
            .then(() => {
                navigate('/')
                dispatch(notify({message: `Welcome ${username}`,type: 'primary'}))
            })
        })
        .catch((e) => {console.log(e)});
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <br></br>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Username" 
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default connect(null, { notify, loginUser, getExerciseToday, getWaterByDate, getFoodToday, getCurrentWeight, getSettings }) (Login)