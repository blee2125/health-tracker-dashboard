import React from "react";
import { Form } from "react-bootstrap";

import ExerciseGoalsForm from "./ExerciseGoalsForm";
import FoodGoalsForm from './FoodGoalsForm';
import GeneralGoalsForm from './GeneralGoalsForm';
import WaterGoalsForm from "./WaterGoalsForm";
import WeightGoalsForm from "./WeightGoalsForm";

export const HealthGoalForm = (props) => {

    return (
      <Form >
        <Form.Group className="mb-3" controlId="formGroupCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={props.healthGoalObject.category || ''}
            placeholder="Category" 
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

        {props.healthGoalObject.category === 'Exercise' ?
        <ExerciseGoalsForm healthGoalObject={props.healthGoalObject} updateData={props.updateData}/> : ''}

        {props.healthGoalObject.category === 'Food' ?
        <FoodGoalsForm healthGoalObject={props.healthGoalObject} updateData={props.updateData}/> : ''}

        {props.healthGoalObject.category === 'General' ?
        <GeneralGoalsForm healthGoalObject={props.healthGoalObject} updateData={props.updateData}/> : ''}

        {props.healthGoalObject.category === 'Water' ?
        <WaterGoalsForm healthGoalObject={props.healthGoalObject} updateData={props.updateData}/> : ''}

        {props.healthGoalObject.category === 'Weight' ?
        <WeightGoalsForm healthGoalObject={props.healthGoalObject} updateData={props.updateData}/> : ''}

      </Form>
    );
}

export default HealthGoalForm;