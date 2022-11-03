import React, {useState} from "react";
import { connect, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { Table, Card } from "react-bootstrap";
import AddHeight from "./AddHeight";
import { addHeight, addBirthday, addGender } from "../../reducers/userSlice";
import AddBirthday from "./AddBirthday";
import AddGender from "./AddGender";
import DateFunctions from "../../functions/DateFunctions";

const UserInfo = (props) => {
    const userToken = useSelector((state) => state.userState.user.token)
    const [height, setHeight] = useState()
    const [birthday, setBirthday] = useState()
    const [gender, setGender] = useState()

    const addHeight = () => {
        props.addHeight({data: {height: height}, userToken})
            .unwrap()
            .then((data) => {
                
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const addBirthday = () => {
        props.addBirthday({data: {birthday: birthday}, userToken})
            .unwrap()
            .then((data) => {
                
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const addGender = () => {
        props.addGender({data: {gender: gender}, userToken})
            .unwrap()
            .then((data) => {
                
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return(
        <div>
            <h1>User Info</h1>
            <Card bg='light' border="secondary" style={{ width: '600px', padding: '25px', margin: "25px"}}>
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                Username:
                            </td>
                            <td>
                            {props.userState.username}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email:
                            </td>
                            <td>
                                {props.userState.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password:
                            </td>
                            <td>
                                <Link to="/userinfo/editpassword">Edit</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Height:
                            </td>
                            <td>
                                {props.userState.height > 0 ? props.userState.height : 
                                <AddHeight 
                                    addHeight={addHeight} 
                                    setHeight={setHeight} 
                                />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Birthday:
                            </td>
                            <td>
                                {props.userState.birthday ? DateFunctions.convertYMDtoMwordDY(props.userState.birthday) : 
                                <AddBirthday 
                                    addBirthday={addBirthday} 
                                    setBirthday={setBirthday} 
                                />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Gender:
                            </td>
                            <td>
                                {props.userState.gender ? props.userState.gender : 
                                <AddGender 
                                    addGender={addGender} 
                                    setGender={setGender} 
                                />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Account Created:
                            </td>
                            <td>
                                {DateFunctions.processCreatedAt(props.userState.createdAt)}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Settings:
                            </td>
                            <td>
                                <Link to="/userinfo/settings">Settings</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Delete Data:
                            </td>
                            <td>
                                <Link to="/userinfo/settings/deletedata">Delete</Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState.user
    };
}

export default connect(mapStateToProps, { addHeight, addBirthday, addGender }) (UserInfo)