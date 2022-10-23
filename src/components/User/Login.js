import React, {useState} from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { loginUser } from "../../reducers/userSlice";

function Login(props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        props.loginUser({username, password})
            .unwrap()
            .then((data) => {
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
                <h1>Sign in</h1>
                <br></br>
                <label>Username</label>
                <input
                    type='text'
                    placeholder="enter username"
                    onChange={e => setUsername(e.target.value)}
                /><br></br>
                <label>Password</label>
                <input
                    type='password'
                    placeholder="enter password"
                    onChange={e => setPassword(e.target.value)}
                /><br></br>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default connect(null, { loginUser }) (Login)