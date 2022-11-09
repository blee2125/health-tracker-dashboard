import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { updateSettings, toggleSettings } from "../../../reducers/settingsSlice";
import {notify} from '../../../reducers/notificationSlice'
import NotificationSettings from "./NotificationSettings";
import DataSettings from "./DataSettings";

function Settings(props) {
    const userToken = useSelector((state) => state.userState.user.token);
    const settings = useSelector((state) => state.settingsState);

    const updateSettings = () => {
        props.updateSettings({settings, userToken})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
    }

    useEffect(() => {
        updateSettings()
        // eslint-disable-next-line
    }, [settings])

    return (
        <>
            <DataSettings />
            <NotificationSettings />
        </>
    )
}

export default connect(null, { notify, updateSettings, toggleSettings }) (Settings)