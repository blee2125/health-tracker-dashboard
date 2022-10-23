import React, {useState} from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { createUser } from "../../reducers/userSlice";

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
                <h1>Register</h1>
                <br></br>
                <label>Username</label>
                <input
                    type='text'
                    placeholder="enter username"
                    onChange={e => setUsername(e.target.value)}
                /><br></br>
                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="Email Address"
                    onChange={e => setEmail(e.target.value)}
                /><br></br>
                <label>Password</label>
                <input
                    type='password'
                    placeholder="enter password"
                    onChange={e => setPassword(e.target.value)}
                /><br></br>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default connect(null, { createUser }) (Register)