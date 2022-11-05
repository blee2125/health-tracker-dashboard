import React, {useState} from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { createUser } from "../../reducers/userSlice";

function Register(props) {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [height, setHeight] = useState();

    const navigate = useNavigate();

    const handleSubmitRegister = async e => {
        e.preventDefault();
        props.createUser({username, email, password, height})
        .unwrap()
        .then((data) => {
            navigate('/login')
        })
        .catch((e) => {console.log(e)});
    }

    return (
        <div>
            <Form onSubmit={handleSubmitRegister}>
                <h1>Register</h1>
                <br></br>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Username" 
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHeight">
                    <Form.Label>Height</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="inches" 
                        onChange={e => setHeight(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)}
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
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default connect(null, { createUser }) (Register)