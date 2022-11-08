import React from "react";
import { Form } from "react-bootstrap";

export const FoodGoalsForm = (props) => {

    return (
        <Form.Group className="mb-3" controlId="formGroupCalories">
          <Form.Label>Max Calories per Day</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Calories" 
            defaultValue={props.healthGoalObject.goal}
            onChange={e => props.updateData('goal', e.target.value)}
          />
        </Form.Group>
    );
}

export default FoodGoalsForm;