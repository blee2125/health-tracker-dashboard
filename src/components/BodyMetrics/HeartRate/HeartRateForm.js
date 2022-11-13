import React from "react";
import { Form } from "react-bootstrap";

export const HeartRateForm = (props) => {

    return (
        <Form>
        <Form.Group className="mb-3" controlId="formGroupBPheartrate">
          <Form.Label>Heart Rate</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Heart Rate" 
            defaultValue={props.heartRateObject.heartRate}
            onChange={e => props.updateData('heartRate', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupBPtime">
          <Form.Label>Time</Form.Label>
          <Form.Control 
            type="time" 
            placeholder="Time" 
            defaultValue={props.heartRateObject.time}
            onChange={e => props.updateData('time', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupBPnotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Notes" 
            defaultValue={props.heartRateObject.notes}
            onChange={e => props.updateData('notes', e.target.value)}
          />
        </Form.Group>
        </Form>
    );
}

export default HeartRateForm;