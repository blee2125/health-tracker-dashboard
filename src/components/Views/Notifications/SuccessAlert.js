import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import {notificationReset} from '../../../reducers/notificationSlice'

function SuccessNotification(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const notification = useSelector((state) => state.notificationState)

    function alertCheck() {
        if (notification.type === 'success') {
            setShow(true)
        }
    }

    function resetAlert() {
        setShow(false)
        dispatch(notificationReset())
    }

    useEffect(() => {
        alertCheck()
        const timer = setTimeout(() => {
            resetAlert()
        }, 2000);
        return () => {clearTimeout(timer)};
        // eslint-disable-next-line
    }, [notification])

    return (
        <>
        <Alert show={show} variant={notification.type} onClick={() => {setShow(false)}}>
            {notification.message ? notification.message : ""}
        </Alert>
        </>
    );
}

export default connect(null, {notificationReset}) (SuccessNotification)