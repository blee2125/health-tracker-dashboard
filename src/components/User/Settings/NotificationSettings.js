import React from "react";
import { Form, Card } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "../../../reducers/settingsSlice";
import {notify} from '../../../reducers/notificationSlice'

function NotificationSettings(props) {
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settingsState.settings);

    const exerciseSettingSwitch = () => {
        dispatch(toggleSettings({setting: 'exerciseNotification'}))
        dispatch(notify({message: 'Exercise Notification Updated',type: 'success'}))
    }

    const foodSettingSwitch = () => {
        dispatch(toggleSettings({setting: 'foodNotification'}))
        dispatch(notify({message: 'Food Notification Updated',type: 'success'}))
    }

    const waterSettingSwitch = () => {
        dispatch(toggleSettings({setting: 'waterNotification'}))
        dispatch(notify({message: 'Water Notification Updated',type: 'success'}))
    }

    const weightSettingSwitch = () => {
        dispatch(toggleSettings({setting: 'weightNotification'}))
        dispatch(notify({message: 'Weight Notification Updated',type: 'success'}))
    }

    const goalSettingSwitch = () => {
        dispatch(toggleSettings({setting: 'goalNotification'}))
        dispatch(notify({message: 'Goal Notification Updated',type: 'success'}))
    }

    return (
        <>
            <Card bg='light' border="secondary" style={{ width: '300px', padding: '25px', margin: "25px"}}>
                <h3>Notifications</h3>
                <Form >
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.exerciseNotification}
                        onChange={() => exerciseSettingSwitch()}
                        label="Exercise"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.foodNotification}
                        onChange={() => foodSettingSwitch()}
                        label="Food"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.waterNotification}
                        onChange={() => waterSettingSwitch()}
                        label="Water"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.weightNotification}
                        onChange={() => weightSettingSwitch()}
                        label="Weight"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.goalNotification}
                        onChange={() => goalSettingSwitch()}
                        label="Goal"
                    />
                </Form>
            </Card>
        </>
    )
}

export default connect(null, { notify, toggleSettings }) (NotificationSettings)