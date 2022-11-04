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
          <Col lg={3}><Form.Label>Carbs</Form.Label></Col>
          <Col>
            <Form.Control 
              type="number" 
              placeholder="Carbs (g)" 
              defaultValue={props.foodObject.carbsg}
              onChange={e => props.updateData('carbsg', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Fat</Form.Label></Col>
          <Col>
            <Form.Control 
              type="number" 
              placeholder="Fat (g)" 
              defaultValue={props.foodObject.fatg}
              onChange={e => props.updateData('fatg', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3}><Form.Label>Protein</Form.Label></Col>
          <Col>
            <Form.Control 
              type="number" 
              placeholder="Protein (g)" 
              defaultValue={props.foodObject.proteing}
              onChange={e => props.updateData('proteing', e.target.value)}
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
      </Form>
    );
}

export default FoodForm;