import React from "react";
import { Form } from "react-bootstrap";

export const WaterGoalsForm = (props) => {

    return (
        <div>
        <Form.Group className="mb-3" controlId="formGroupWater">
          <Form.Label>Glasses per Day</Form.Label>
          <Form.Control 
            type="number" 
            min='0'
            max='12'
            placeholder="Glasses" 
            defaultValue={props.healthGoalObject.goal}
            onChange={e => props.updateData('goal', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupRepeat">
        <Form.Label>Repeat Daily</Form.Label>
        <Form.Check
            inline
            label="Yes"
            name="group1"
            type='radio'
            id={`inline-radio-1`}
            onChange={() => props.updateData('repeat', true)}
          />
          <Form.Check
            inline
            label="No"
            name="group1"
            type='radio'
            id={`inline-radio-2`}
            onChange={() => props.updateData('repeat', false)}
          />
      </Form.Group>
      </div>
    );
}

export default WaterGoalsForm;