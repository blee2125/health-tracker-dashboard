import React from "react";
import {Form} from "react-bootstrap";

function ExerciseGraphSelection(props) {

  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formGroupGraphData">
            <Form.Label>Graph Data</Form.Label>
            <Form.Select
                value={props.graphSelection}
                onChange={e => props.setGraphSelection(e.target.value)}
            >
                <option value='All'>All</option>
                <option value='Endurance'>Endurance</option>
                <option value='Strength'>Strength</option>
                <option value='Balance'>Balance</option>
                <option value='Flexibility'>Flexibility</option>
            </Form.Select>
            </Form.Group>
        </Form>
    </>
  )
}

export default (ExerciseGraphSelection)