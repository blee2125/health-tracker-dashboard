import React from "react";

export const FoodForm = (props) => {

    return (
      <form >
        <input 
          name='foodName' 
          placeholder='foodName'
          type='text'
          onChange={e => props.updateData('foodName', e.target.value)}
        />
        <input 
          name='totalCalories'
          placeholder='totalCalories'
          type='number'
          onChange={e => props.updateData('totalCalories', e.target.value)}
        />
        <input 
          name='timeOfConsumption'
          placeholder='timeOfConsumption'
          type='text'
          onChange={e => props.updateData('timeOfConsumption', e.target.value)}
        />
        <input 
          name='meal'
          placeholder='meal'
          type='text'
          onChange={e => props.updateData('meal', e.target.value)}
        />
        <input 
          name='placeOfConsumption'
          placeholder='placeOfConsumption'
          type='text'
          onChange={e => props.updateData('placeOfConsumption', e.target.value)}
        />
        <input 
          name='withWhom'
          placeholder='withWhom'
          type='text'
          onChange={e => props.updateData('withWhom', e.target.value)}
        />
        <input 
          name='activity'
          placeholder='activity'
          type='text'
          onChange={e => props.updateData('activity', e.target.value)}
        />
        <input 
          name='mood'
          placeholder='mood'
          type='text'
          onChange={e => props.updateData('mood', e.target.value)}
        />
        <input 
          name='hungerLevel'
          placeholder='hungerLevel'
          type='text'
          onChange={e => props.updateData('hungerLevel', e.target.value)}
        />
        <input 
          name='fullness'
          placeholder='fullness'
          type='text'
          onChange={e => props.updateData('fullness', e.target.value)}
        />
        <input 
          name='amount'
          placeholder='amount'
          type='text'
          onChange={e => props.updateData('amount', e.target.value)}
        />
      </form>
    );
  }

export default FoodForm;