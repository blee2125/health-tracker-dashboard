import React, { useState, useEffect } from 'react';
import { Button, Modal, NavLink } from 'react-bootstrap';
import { createSleep } from "../../../reducers/sleepSlice";
import { connect, useSelector, useDispatch } from "react-redux";
import {notify} from '../../../reducers/notificationSlice'
import SleepForm from './SleepForm';

function AddSleep(props) {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.userState.user.token)
    const [sleepObject, setSleepObject] = useState({
        bedtime: '',
        wakeUpTime: '',
        totalTime: ''
    })
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.createSleep({data: sleepObject, userToken: userToken})
        .unwrap()
        .then((data) => {
            handleClose()
            dispatch(notify({message: 'Sleep Added',type: 'success'}))
        })
        .catch((e) => {console.log(e)});
    }

    function calcTotalTime() {
        let total = 0
        const bedtimeHrMin = sleepObject.bedtime.split(':')
        const bedtimeToMin = (Number(bedtimeHrMin[0])*60) + Number(bedtimeHrMin[1])
        const wakeHrMin = sleepObject.wakeUpTime.split(':')
        const wakeToMin = (Number(wakeHrMin[0])*60) + Number(wakeHrMin[1])
        const difference = ((Number(wakeToMin) - Number(bedtimeToMin))/60)
        if (difference < 0) {
            total = Math.round((24+difference)*60)
        } else {
            total = Math.round(difference * 60)
        }
        sleepObject.totalTime = total
    }

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setSleepObject(sleepObject => ({
            ...sleepObject,
            ...updatedValue
        }));
    };

    useEffect(() => {
        calcTotalTime()
        // eslint-disable-next-line
    }, [sleepObject])

    return (
        <>
        {props.onSidebar ?
        <NavLink onClick={handleShow} className='sidebar-sub-link'>Add Sleep</NavLink>
        : <Button onClick={handleShow}>Add Sleep</Button>}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Sleep</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SleepForm 
                    sleepObject={sleepObject} 
                    updateData={updateData}
                />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button onClick={handleSubmit}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default connect(null, { notify, createSleep}) (AddSleep)