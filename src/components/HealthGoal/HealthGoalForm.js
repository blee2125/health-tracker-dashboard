import React from "react";
import { Form } from "react-bootstrap";

export const HealthGoalForm = (props) => {

    return (
      <Form >
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Goal</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Goal" 
            defaultValue={props.healthGoalObject.goal}
            onChange={e => props.updateData('goal', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupType">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={props.healthGoalObject.category || ''}
            onChange={e => props.updateData('category', e.target.value)}
          >
            <option value=''></option>
            <option value='Exercise'>Exercise</option>
            <option value='Food'>Food</option>
            <option value='Water'>Water</option>
            <option value='Weight'>Weight</option>
            <option value='General'>General</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDuration">
          <Form.Label>Timeframe</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Duration" 
            defaultValue={props.healthGoalObject.timeframe}
            onChange={e => props.updateData('timeframe', e.target.value)}
          />
        </Form.Group>
      </Form>
    );
}

export default HealthGoalForm;