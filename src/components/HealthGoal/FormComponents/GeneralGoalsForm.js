import React from "react";
import { Form } from "react-bootstrap";

export const GeneralGoalsForm = (props) => {

    return (
        <Form.Group className="mb-3" controlId="formGroupGoal">
          <Form.Label>Goal</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Goal" 
            defaultValue={props.healthGoalObject.goal}
            onChange={e => props.updateData('goal', e.target.value)}
          />
        </Form.Group>
    );
}

export default GeneralGoalsForm;