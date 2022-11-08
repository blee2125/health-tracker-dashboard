import React from "react";
import { Form } from "react-bootstrap";

export const ExerciseGoalsForm = (props) => {

    return (
        <Form.Group className="mb-3" controlId="formGroupMinutes">
          <Form.Label>Minutes per Day</Form.Label>
          <Form.Control 
            type="number" 
            min={0}
            max={360}
            placeholder="Minutes" 
            defaultValue={props.healthGoalObject.goal}
            onChange={e => props.updateData('goal', e.target.value)}
          />
        </Form.Group>
    );
}

export default ExerciseGoalsForm;