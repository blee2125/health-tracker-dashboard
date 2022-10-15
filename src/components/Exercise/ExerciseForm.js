import React from "react";

export const ExerciseForm = (props) => {

    return (
      <form >
        <label>add exercise</label>
        <br />
        <input 
          name='exerciseName' 
          placeholder='exerciseName'
          type='text'
          value={props.exerciseObject.exerciseName}
          onChange={e => props.updateData('exerciseName', e.target.value)}
        />
        <input 
          name='duration'
          placeholder='duration'
          type='number'
          value={props.exerciseObject.duration ? props.exerciseObject.duration : ''}
          onChange={e => props.updateData('duration', e.target.value)}
        />
        <input 
          name='timeOfExercise'
          placeholder='timeOfExercise'
          type='time'
          value={props.exerciseObject.timeOfExercise}
          onChange={e => props.updateData('timeOfExercise', e.target.value)}
        />
        <input 
          name='typeOfExercise'
          placeholder='typeOfExercise'
          type='text'
          value={props.exerciseObject.typeOfExercise}
          onChange={e => props.updateData('typeOfExercise', e.target.value)}
        />
      </form>
    );
  }

export default ExerciseForm;