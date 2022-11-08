import React from "react";
import { Form } from "react-bootstrap";

export const WeightGoalsForm = (props) => {

    return (
        <Form.Group className="mb-3" controlId="formGroupWeight">
          <Form.Label>Goal Weight</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Weight" 
            defaultValue={props.healthGoalObject.goal}
            onChange={e => props.updateData('goal', e.target.value)}
          />
        </Form.Group>
    );
}

export default WeightGoalsForm;