import React from "react";
import { Form } from "react-bootstrap";

export const BloodPressureForm = (props) => {

    return (
        <Form>
        <Form.Group className="mb-3" controlId="formGroupBPupper">
          <Form.Label>Upper/Systolic</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Lower/Diastolic" 
            defaultValue={props.bloodPressureObject.systolic}
            onChange={e => props.updateData('systolic', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupBPlower">
          <Form.Label>Lower/Diastolic</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Lower/Diastolic" 
            defaultValue={props.bloodPressureObject.diastolic}
            onChange={e => props.updateData('diastolic', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupBPheartrate">
          <Form.Label>Heart Rate</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Heart Rate" 
            defaultValue={props.bloodPressureObject.heartRate}
            onChange={e => props.updateData('heartRate', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupBPtime">
          <Form.Label>Time</Form.Label>
          <Form.Control 
            type="time" 
            placeholder="Time" 
            defaultValue={props.bloodPressureObject.time}
            onChange={e => props.updateData('time', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupBPnotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Notes" 
            defaultValue={props.bloodPressureObject.notes}
            onChange={e => props.updateData('notes', e.target.value)}
          />
        </Form.Group>
        </Form>
    );
}

export default BloodPressureForm;