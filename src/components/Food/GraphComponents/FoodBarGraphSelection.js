import React from "react";
import {Form} from "react-bootstrap";

function FoodBarGraphSelection(props) {

  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formGroupGraphData">
            <Form.Label>Graph Data</Form.Label>
                <Form.Select
                    value={props.graphSelection}
                    onChange={e => props.setGraphSelection(e.target.value)}
                >
                    <option value='Calories'>Calories</option>
                </Form.Select>
            </Form.Group>
        </Form>
    </>
  )
}

export default (FoodBarGraphSelection)