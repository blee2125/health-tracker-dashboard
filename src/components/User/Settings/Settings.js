import React, { useEffect } from "react";
import { Form, Card } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";
import { getSettings, updateSettings, deleteSettings, changeCollectExercise, changeCollectFood, changeCollectWater, changeCollectWeight } from "../../../reducers/settingsSlice";

function Settings(props) {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.userState.user.token);
    const settings = useSelector((state) => state.settingsState);

    const updateSettings = () => {
        props.updateSettings({settings, userToken})
        .unwrap()
        .then((data) => {
            
        })
        .catch((e) => {
            console.log(e);
        });
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
                        onChange={() => dispatch(changeCollectExercise())}
                        label="Exercise"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.collectFoodData}
                        onChange={() => dispatch(changeCollectFood())}
                        label="Food"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.collectWaterData}
                        onChange={() => dispatch(changeCollectWater())}
                        label="Water"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        checked={settings.collectWeightData}
                        onChange={() => dispatch(changeCollectWeight())}
                        label="Weight"
                    />
                </Form>
            </Card>
        </>
    )
}

export default connect(null, { getSettings, updateSettings, deleteSettings }) (Settings)