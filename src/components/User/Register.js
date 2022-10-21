import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { createUser } from "../../reducers/userSlice";
import { useNavigate } from "react-router-dom";

function Register(props) {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmitRegister = async e => {
        e.preventDefault();
        props.createUser({username, email, password})
            .unwrap()
            .then((data) => {
                navigate('/login')
            })
            .catch((e) => {
              console.log(e);
            });
    }

    return (
        <div>
            <Form onSubmit={handleSubmitRegister}>
                <h1>sign up</h1>
                <br></br>
                <label>username</label>
                <input
                    type='text'
                    placeholder="enter username"
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Email address</label>
                <input
                    type="email"
                    placeholder="Email Address"
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type='password'
                    placeholder="enter password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default connect(null, { createUser }) (Register)