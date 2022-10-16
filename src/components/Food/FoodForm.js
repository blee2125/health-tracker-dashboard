import React from "react";

export const FoodForm = (props) => {

    return (
      <form >
        <label>Name</label>
        <input 
          name='foodName' 
          placeholder='foodName'
          type='text'
          value={props.foodObject.foodName}
          onChange={e => props.updateData('foodName', e.target.value)}
        /><br></br>
        <label>Total Calories</label>
        <input 
          name='totalCalories'
          placeholder='totalCalories'
          type='number'
          value={props.foodObject.totalCalories}
          onChange={e => props.updateData('totalCalories', e.target.value)}
        /><br></br>
        <label>Time of Consumption</label>
        <input 
          name='timeOfConsumption'
          placeholder='timeOfConsumption'
          type='time'
          value={props.foodObject.timeOfConsumption}
          onChange={e => props.updateData('timeOfConsumption', e.target.value)}
        /><br></br>
        <label>Meal</label>
        <select>
          <option></option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
        </select><br></br>
        <label>Place of Consumption</label>
        <input 
          name='placeOfConsumption'
          placeholder='placeOfConsumption'
          type='text'
          value={props.foodObject.placeOfConsumption}
          onChange={e => props.updateData('placeOfConsumption', e.target.value)}
        /><br></br>
        <label>With Whom</label>
        <input 
          name='withWhom'
          placeholder='withWhom'
          type='text'
          value={props.foodObject.withWhom}
          onChange={e => props.updateData('withWhom', e.target.value)}
        /><br></br>
        <label>Activity</label>
        <input 
          name='activity'
          placeholder='activity'
          type='text'
          value={props.foodObject.activity}
          onChange={e => props.updateData('activity', e.target.value)}
        /><br></br>
        <label>Mood</label>
        <input 
          name='mood'
          placeholder='mood'
          type='text'
          value={props.foodObject.mood}
          onChange={e => props.updateData('mood', e.target.value)}
        /><br></br>
        <label>Hunger Level</label>
        <input 
          name='hungerLevel'
          placeholder='hungerLevel'
          type='text'
          value={props.foodObject.hungerLevel}
          onChange={e => props.updateData('hungerLevel', e.target.value)}
        /><br></br>
        <label>Fullness</label>
        <input 
          name='fullness'
          placeholder='fullness'
          type='text'
          value={props.foodObject.fullness}
          onChange={e => props.updateData('fullness', e.target.value)}
        /><br></br>
        <label>Amount</label>
        <input 
          name='amount'
          placeholder='amount'
          type='text'
          value={props.foodObject.amount}
          onChange={e => props.updateData('amount', e.target.value)}
        />
      </form>
    );
  }

export default FoodForm;