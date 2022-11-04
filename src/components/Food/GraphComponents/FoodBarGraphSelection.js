import React from "react";
import {Form} from "react-bootstrap";

function FoodBarGraphSelection(props) {

  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formGroupGraphData">
            <Form.Label>Graph Data - Meal</Form.Label>
                <Form.Select
                    value={props.graphSelection}
                    onChange={e => props.setGraphSelection(e.target.value)}
                >
                    <option value='All'>All</option>
                    <option value='Breakfast'>Breakfast</option>
                    <option value='Lunch'>Lunch</option>
                    <option value='Dinner'>Dinner</option>
                    <option value='Snack'>Snack</option>
                    <option value=''>No Assigned Meal</option>
                </Form.Select>
            </Form.Group>
        </Form>
    </>
  )
}

export default (FoodBarGraphSelection)