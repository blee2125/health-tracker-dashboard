import React from "react";
import { Form, Card, Button, ButtonGroup } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "../../../reducers/settingsSlice";
import {notify} from '../../../reducers/notificationSlice'

function NotificationSettings(props) {
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settingsState.settings);

    const onNotifications = () => {
        dispatch(toggleSettings({setting: 'onNotifications'}))
        dispatch(notify({message: 'All Notifications On',type: 'success'}))
    }

    const offNotifications = () => {
        dispatch(toggleSettings({setting: 'offNotifications'}))
    }

    return (
        <>
            <Card bg='light' border="secondary" style={{ width: '300px', padding: '25px', margin: "25px"}}>
                <h3>Notifications</h3>
                <Form >
                    <ButtonGroup>
                        <Button 
                            variant={settings.notifications ? 'primary' : 'secondary'}
                            onClick={onNotifications}>
                        On</Button>
                        <Button
                            variant={settings.notifications ? 'secondary' : 'primary'}
                            onClick={offNotifications}>
                        Off</Button>
                    </ButtonGroup>
                </Form>
            </Card>
        </>
    )
}

export default connect(null, { notify, toggleSettings }) (NotificationSettings)