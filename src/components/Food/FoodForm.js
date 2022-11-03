import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export const FoodForm = (props) => {

    return (
      <Form >
        <Row>
          <Col lg={3}><Form.Label>Name</Form.Label></Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Name" 
              defaultValue={props.foodObject.name}
              onChange={e => props.updateData('name', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Calories</Form.Label></Col>
          <Col>
            <Form.Control 
              type="number" 
              placeholder="Calories" 
              defaultValue={props.foodObject.calories}
              onChange={e => props.updateData('calories', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Time</Form.Label></Col>
          <Col>
            <Form.Control 
              type="time" 
              placeholder="Time" 
              defaultValue={props.foodObject.timeOfConsumption}
              onChange={e => props.updateData('timeOfConsumption', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Meal</Form.Label></Col>
          <Col>
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
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Place</Form.Label></Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Place" 
              defaultValue={props.foodObject.placeOfConsumption}
              onChange={e => props.updateData('placeOfConsumption', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>With Whom</Form.Label></Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="People" 
              defaultValue={props.foodObject.withWhom}
              onChange={e => props.updateData('withWhom', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Activity</Form.Label></Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Activity" 
              defaultValue={props.foodObject.activity}
              onChange={e => props.updateData('activity', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Mood</Form.Label></Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Mood" 
              defaultValue={props.foodObject.mood}
              onChange={e => props.updateData('mood', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Hunger Level</Form.Label></Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Hunger Level" 
              defaultValue={props.foodObject.hungerLevel}
              onChange={e => props.updateData('hungerLevel', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Fullness</Form.Label></Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Fullness" 
              defaultValue={props.foodObject.fullness}
              onChange={e => props.updateData('fullness', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Amount</Form.Label></Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Amount" 
              defaultValue={props.foodObject.amount}
              onChange={e => props.updateData('amount', e.target.value)}
            />
          </Col>
        </Row>
      </Form>
    );
}

export default FoodForm;