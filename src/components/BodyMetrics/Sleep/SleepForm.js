import React from "react";
import { Form } from "react-bootstrap";

export const SleepForm = (props) => {

    return (
        <Form>
        <Form.Group className="mb-3" controlId="formGroupBedtime">
          <Form.Label>Bedtime</Form.Label>
          <Form.Control 
            type="time" 
            placeholder="Bedtime" 
            defaultValue={props.sleepObject.bedtime}
            onChange={e => props.updateData('bedtime', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupWakeUpTime">
          <Form.Label>Wake Up Time</Form.Label>
          <Form.Control 
            type="time" 
            placeholder="Wake Up Time" 
            defaultValue={props.sleepObject.wakeUpTime}
            onChange={e => props.updateData('wakeUpTime', e.target.value)}
          />
        </Form.Group>
        </Form>
    );
}

export default SleepForm;