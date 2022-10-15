import React from "react";

export const FoodForm = (props) => {

    return (
      <form >
        <input 
          name='foodName' 
          placeholder='foodName'
          type='text'
          value={props.foodObject.foodName}
          onChange={e => props.updateData('foodName', e.target.value)}
        />
        <input 
          name='totalCalories'
          placeholder='totalCalories'
          type='number'
          value={props.foodObject.totalCalories}
          onChange={e => props.updateData('totalCalories', e.target.value)}
        />
        <input 
          name='timeOfConsumption'
          placeholder='timeOfConsumption'
          type='text'
          value={props.foodObject.timeOfConsumption}
          onChange={e => props.updateData('timeOfConsumption', e.target.value)}
        />
        <input 
          name='meal'
          placeholder='meal'
          type='text'
          value={props.foodObject.meal}
          onChange={e => props.updateData('meal', e.target.value)}
        />
        <input 
          name='placeOfConsumption'
          placeholder='placeOfConsumption'
          type='text'
          value={props.foodObject.placeOfConsumption}
          onChange={e => props.updateData('placeOfConsumption', e.target.value)}
        />
        <input 
          name='withWhom'
          placeholder='withWhom'
          type='text'
          value={props.foodObject.withWhom}
          onChange={e => props.updateData('withWhom', e.target.value)}
        />
        <input 
          name='activity'
          placeholder='activity'
          type='text'
          value={props.foodObject.activity}
          onChange={e => props.updateData('activity', e.target.value)}
        />
        <input 
          name='mood'
          placeholder='mood'
          type='text'
          value={props.foodObject.mood}
          onChange={e => props.updateData('mood', e.target.value)}
        />
        <input 
          name='hungerLevel'
          placeholder='hungerLevel'
          type='text'
          value={props.foodObject.hungerLevel}
          onChange={e => props.updateData('hungerLevel', e.target.value)}
        />
        <input 
          name='fullness'
          placeholder='fullness'
          type='text'
          value={props.foodObject.fullness}
          onChange={e => props.updateData('fullness', e.target.value)}
        />
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