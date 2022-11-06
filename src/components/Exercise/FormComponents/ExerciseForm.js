import React from "react";
import { Form } from "react-bootstrap";

export const ExerciseForm = (props) => {

    return (
      <Form >
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Name" 
            value={props.exerciseObject.exerciseName}
            onChange={e => props.updateData('exerciseName', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDuration">
          <Form.Label>Duration</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Duration" 
            value={props.exerciseObject.duration}
            onChange={e => props.updateData('duration', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupTime">
          <Form.Label>Time</Form.Label>
          <Form.Control 
            type="time" 
            placeholder="Time" 
            value={props.exerciseObject.timeOfExercise}
            onChange={e => props.updateData('timeOfExercise', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupType">
          <Form.Label>Type</Form.Label>
          <Form.Select
            value={props.exerciseObject.typeOfExercise || ''}
            onChange={e => props.updateData('typeOfExercise', e.target.value)}
          >
            <option value=''></option>
            <option value='Endurance'>Endurance</option>
            <option value='Strength'>Strength</option>
            <option value='Balance'>Balance</option>
            <option value='Flexibility'>Flexibility</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
}

export default ExerciseForm;