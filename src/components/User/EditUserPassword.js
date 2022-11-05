import React, {useState} from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { editPassword } from "../../reducers/userSlice";

function EditUserPassword(props) {
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const userToken = useSelector((state) => state.userState.user.token)

    const navigate = useNavigate();

    const handleSubmitRegister = async e => {
        e.preventDefault();
        props.editPassword({data: {currentPassword, newPassword}, userToken: userToken})
        .unwrap()
        .then((data) => {
            navigate('/userinfo')
        })
        .catch((e) => {console.log(e)});
    }

    return (
        <div>
            <Form onSubmit={handleSubmitRegister}>
                <h1>Edit Password</h1>
                <br></br>
                <Form.Group className="mb-3" controlId="formGroupCurrentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Current Password" 
                        onChange={e => setCurrentPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNewPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="New Password" 
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default connect(null, {editPassword}) (EditUserPassword)