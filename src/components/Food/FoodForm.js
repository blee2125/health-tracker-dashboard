import React from "react";

export const FoodForm = (props) => {




    return (
      <form >
        <label>food to add</label>
        <br />
        <input 
          name='name' 
          type='text'
          value={props.name}
          onChange={e => props.updateData('name', e.target.value)}
        />
      </form>
    );
  }

export default FoodForm;