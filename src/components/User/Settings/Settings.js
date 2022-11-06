import React, { useEffect } from "react";
import { Form, Card } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import { getSettings, updateSettings, deleteSettings, changeCollectExercise, changeCollectFood, changeCollectWater, changeCollectWeight } from "../../../reducers/settingsSlice";
import {success} from '../../../reducers/notificationSlice'

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
        dispatch(success({message: 'Exercise Settings Updated',type: 'success'}))
    }

    const foodSettingSwitch = () => {
        dispatch(changeCollectFood())
        dispatch(success({message: 'Food Settings Updated',type: 'success'}))
    }

    const waterSettingSwitch = () => {
        dispatch(changeCollectWater())
        dispatch(success({message: 'Water Settings Updated',type: 'success'}))
    }

    const weightSettingSwitch = () => {
        dispatch(changeCollectWeight())
        dispatch(success({message: 'Weight Settings Updated',type: 'success'}))
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
        </>
    )
}

export default connect(null, { success, getSettings, updateSettings, deleteSettings }) (Settings)