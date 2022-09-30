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
          onChange={e => props.updateData('exerciseName', e.target.value)}
        />
        <input 
          name='duration'
          placeholder='duration'
          type='number'
          onChange={e => props.updateData('duration', e.target.value)}
        />
        <input 
          name='timeOfExercise'
          placeholder='timeOfExercise'
          type='time'
          onChange={e => props.updateData('timeOfExercise', e.target.value)}
        />
        <input 
          name='typeOfExercise'
          placeholder='typeOfExercise'
          type='text'
          onChange={e => props.updateData('typeOfExercise', e.target.value)}
        />
      </form>
    );
  }

export default ExerciseForm;