import React from "react";
import {Form, Card, Col, Row} from "react-bootstrap";

function FoodBarGraphSelection(props) {

  return (
    <>
        <Card bg='light' border="secondary" style={{ width: '800px', padding: '25px', margin: "25px"}}>
        <Form>
            <Row>
            <Col>
            <Form.Label>Meal</Form.Label>
                <Form.Select
                    value={props.graphSelection}
                    onChange={e => props.setGraphSelectionMeal(e.target.value)}
                >
                    <option value='All'>All</option>
                    <option value='Breakfast'>Breakfast</option>
                    <option value='Lunch'>Lunch</option>
                    <option value='Dinner'>Dinner</option>
                    <option value='Snack'>Snack</option>
                    <option value=''>No Assigned Meal</option>
                </Form.Select>
            </Col>
            <Col>
            <Form.Label>Calories/Macros</Form.Label>
                <Form.Select
                    value={props.GraphSelectionMacros}
                    onChange={e => props.setGraphSelectionMacros(e.target.value)}
                >
                    <option value='calories'>Calories</option>
                    <option value='carbsg'>Carbs</option>
                    <option value='fatg'>Fat</option>
                    <option value='proteing'>Protein</option>
                </Form.Select>
            </Col>
            </Row>
        </Form>
        </Card>
    </>
  )
}

export default (FoodBarGraphSelection)