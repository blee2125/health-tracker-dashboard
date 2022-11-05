import React from "react";
import { Form, Col, Row } from "react-bootstrap";

function ListCompletedFilter(props) {

    return (
        <>
            <Form>
                <Row>
                    <Col lg={2}>
                        <Form.Label>Filter</Form.Label>
                    </Col>
                    <Col>
                        <Form.Select
                            value={props.goalCompletedFilter}
                            onChange={e => props.setGoalCompletedFilter(e.target.value)}
                        >
                            <option value='All'>All</option>
                            <option value='In Progress'>In Progress</option>
                            <option value='Completed'>Completed</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default (ListCompletedFilter)