import React from "react";
import { Table, Card } from "react-bootstrap";

import { connect } from "react-redux";

const UserInfo = (props) => {

    // const getUser = () => {
    //     //console.log(userData.user.username, userData.user.token)
    //     props.getUserData(userData.user)
    //     .unwrap()
    //     .then((data) => {
    //       //console.log(data)
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // } <button onClick={getUser}>getUser</button>


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

export default connect(mapStateToProps, null) (UserInfo)