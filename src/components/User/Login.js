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

export default connect(null, { loginUser }) (Login)