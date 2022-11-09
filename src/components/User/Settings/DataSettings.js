import React from "react";
import { Form, Card } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "../../../reducers/settingsSlice";
import {notify} from '../../../reducers/notificationSlice'

function DataSettings(props) {
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settingsState.settings);

    const exerciseSettingSwitch = () => {
        dispatch(toggleSettings({setting: 'collectExerciseData'}))
        dispatch(notify({message: 'Exercise Data Settings Updated',type: 'success'}))
    }

    const foodSettingSwitch = () => {
        dispatch(toggleSettings({setting: 'collectFoodData'}))
        dispatch(notify({message: 'Food Settings Updated',type: 'success'}))
    }

    const waterSettingSwitch = () => {
        dispatch(toggleSettings({setting: 'collectWaterData'}))
        dispatch(notify({message: 'Water Settings Updated',type: 'success'}))
    }

    const weightSettingSwitch = () => {
        dispatch(toggleSettings({setting: 'collectWeightData'}))
        dispatch(notify({message: 'Weight Settings Updated',type: 'success'}))
    }

    return (
        <>
            <Card bg='light' border="secondary" style={{ width: '300px', padding: '25px', margin: "25px"}}>
                <h3>Collect Data</h3>
                <Form >
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.collectExerciseData}
                        onChange={() => exerciseSettingSwitch()}
                        label="Exercise"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.collectFoodData}
                        onChange={() => foodSettingSwitch()}
                        label="Food"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.collectWaterData}
                        onChange={() => waterSettingSwitch()}
                        label="Water"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.collectWeightData}
                        onChange={() => weightSettingSwitch()}
                        label="Weight"
                    />
                </Form>
            </Card>
        </>
    )
}

export default connect(null, { notify, toggleSettings }) (DataSettings)