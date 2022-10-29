import React, {useState} from "react";
import { connect, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { Table, Card } from "react-bootstrap";
import AddHeight from "./AddHeight";
import { addHeight } from "../../reducers/userSlice";

const UserInfo = (props) => {
    const userToken = useSelector((state) => state.userState.user.token)
    const [height, setHeight] = useState()

    const addHeight = () => {
        props.addHeight({data: {height: height}, userToken})
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

export default connect(mapStateToProps, {addHeight}) (UserInfo)