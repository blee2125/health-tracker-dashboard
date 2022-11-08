import React, { useEffect } from "react";
import { Form, Card } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import { getSettings, updateSettings, deleteSettings, changeCollectExercise, changeCollectFood, changeCollectWater, changeCollectWeight } from "../../../reducers/settingsSlice";
import {notify} from '../../../reducers/notificationSlice'
import NotificationSettings from "./NotificationSettings";

function Settings(props) {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.userState.user.token);
    const settings = useSelector((state) => state.settingsState);

    const updateSettings = () => {
        props.updateSettings({settings, userToken})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
    }

    const exerciseSettingSwitch = () => {
        dispatch(changeCollectExercise())
        dispatch(notify({message: 'Exercise Settings Updated',type: 'success'}))
    }

    const foodSettingSwitch = () => {
        dispatch(changeCollectFood())
        dispatch(notify({message: 'Food Settings Updated',type: 'success'}))
    }

    const waterSettingSwitch = () => {
        dispatch(changeCollectWater())
        dispatch(notify({message: 'Water Settings Updated',type: 'success'}))
    }

    const weightSettingSwitch = () => {
        dispatch(changeCollectWeight())
        dispatch(notify({message: 'Weight Settings Updated',type: 'success'}))
    }

    useEffect(() => {
        updateSettings()
        // eslint-disable-next-line
    }, [settings])

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
            <NotificationSettings />
        </>
    )
}

export default connect(null, { notify, getSettings, updateSettings, deleteSettings }) (Settings)