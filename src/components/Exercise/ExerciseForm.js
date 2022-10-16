import React from "react";

export const ExerciseForm = (props) => {

    return (
      <form >
        <label>Name</label>
        <input 
          name='exerciseName' 
          placeholder='exerciseName'
          type='text'
          value={props.exerciseObject.exerciseName}
          onChange={e => props.updateData('exerciseName', e.target.value)}
        /><br></br>
        <label>Duration</label>
        <input 
          name='duration'
          placeholder='duration'
          type='number'
          value={props.exerciseObject.duration}
          onChange={e => props.updateData('duration', e.target.value)}
        /><br></br>
        <label>Time</label>
        <input 
          name='timeOfExercise'
          placeholder='timeOfExercise'
          type='time'
          value={props.exerciseObject.timeOfExercise}
          onChange={e => props.updateData('timeOfExercise', e.target.value)}
        /><br></br>
        <label>Type</label>
        <select value={props.exerciseObject.typeOfExercise} onChange={e => props.updateData('typeOfExercise', e.target.value)}>
          <option value=''></option>
          <option value='Endurance'>Endurance</option>
          <option value='Strength'>Strength</option>
          <option value='Balance'>Balance</option>
          <option value='Flexibility'>Flexibility</option>
        </select>
      </form>
    );
  }

export default ExerciseForm;