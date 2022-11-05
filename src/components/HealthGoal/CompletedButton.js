import React from "react";
import { Button } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { updateHealthGoal, getAllHealthGoal } from "../../reducers/healthGoalSlice";

function CompletedButton(props) {
    const userToken = useSelector((state) => state.userState.user.token)

    const markCompleted = () => {
        props.updateHealthGoal({id: props.id, data: {completed: true}, userToken: userToken})
            .unwrap()
            .then((data) => {
                props.getAllHealthGoal(userToken)
            })
            .catch((e) => {
                console.log(e);
            });
    }


    return (
        <Button onClick={markCompleted} variant="success">Done</Button>
    )
}

export default connect(null, { updateHealthGoal, getAllHealthGoal }) (CompletedButton)