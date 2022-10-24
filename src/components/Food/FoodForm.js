import React from "react";
import { Form } from "react-bootstrap";

export const FoodForm = (props) => {

    return (
      <Form >
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Name" 
            defaultValue={props.foodObject.name}
            onChange={e => props.updateData('name', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupCalories">
          <Form.Label>Calories</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Calories" 
            defaultValue={props.foodObject.calories}
            onChange={e => props.updateData('calories', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupTime">
          <Form.Label>Time of Consumption</Form.Label>
          <Form.Control 
            type="time" 
            placeholder="Time" 
            defaultValue={props.foodObject.timeOfConsumption}
            onChange={e => props.updateData('timeOfConsumption', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMeal">
          <Form.Label>Meal</Form.Label>
          <Form.Select
            value={props.foodObject.meal || ''}
            onChange={e => props.updateData('meal', e.target.value)}
          >
            <option value=''></option>
            <option value='Breakfast'>Breakfast</option>
            <option value='Lunch'>Lunch</option>
            <option value='Dinner'>Dinner</option>
            <option value='Snack'>Snack</option>        
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPlace">
          <Form.Label>Place of Consumption</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Place" 
            defaultValue={props.foodObject.placeOfConsumption}
            onChange={e => props.updateData('placeOfConsumption', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupWithWhom">
          <Form.Label>With Whom</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="People" 
            defaultValue={props.foodObject.withWhom}
            onChange={e => props.updateData('withWhom', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupActivity">
          <Form.Label>Activity</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Activity" 
            defaultValue={props.foodObject.activity}
            onChange={e => props.updateData('activity', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMood">
          <Form.Label>Mood</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Mood" 
            defaultValue={props.foodObject.mood}
            onChange={e => props.updateData('mood', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupHungerLevel">
          <Form.Label>Hunger Level</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Hunger Level" 
            defaultValue={props.foodObject.hungerLevel}
            onChange={e => props.updateData('hungerLevel', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupFullness">
          <Form.Label>Fullness</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Fullness" 
            defaultValue={props.foodObject.fullness}
            onChange={e => props.updateData('fullness', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Amount" 
            defaultValue={props.foodObject.amount}
            onChange={e => props.updateData('amount', e.target.value)}
          />
        </Form.Group>
      </Form>
    );
}

export default FoodForm;