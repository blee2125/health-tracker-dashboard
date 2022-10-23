import React from "react";
import { Table, Card } from "react-bootstrap";

import { connect } from "react-redux";

const UserInfo = (props) => {

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