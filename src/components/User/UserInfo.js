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

    const processCreatedAt = (date) => {
        const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        const removeTime = date.split('T')
        const newDate = removeTime[0].split('-')
        return monthArray[newDate[1]-1]+" "+newDate[2]+" "+newDate[0]
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
                                Account Created:
                            </td>
                            <td>
                                {processCreatedAt(props.userState.createdAt)}
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