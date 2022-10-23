import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { loginUser } from "../../reducers/userSlice";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [username, setUsername] = useState();
    //const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        props.loginUser({username, password})
            .unwrap()
            .then((data) => {
                //console.log(data)
                props.setToken(data.token);
                props.setUserData({token: data.token, user: data, isAuthenticated: true})
                navigate('/')
            })
            .catch((e) => {
                sessionStorage.clear()
                console.log(e);
            });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>sign in</h1>
                <br></br>
                <label>username</label>
                <input
                    type='text'
                    placeholder="enter username"
                    onChange={e => setUsername(e.target.value)}
                />
                <label>password</label>
                <input
                    type='password'
                    placeholder="enter password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default connect(null, { loginUser }) (Login)