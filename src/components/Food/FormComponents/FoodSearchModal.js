import React, { useState } from 'react';
import { Form, Row, Col, Button, Modal, Table } from 'react-bootstrap';
import http from "../../../http-common";

function FoodSearchModal(props) {    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [foodAmount, setFoodAmount] = useState('')
    const [foodUnit, setFoodUnit] = useState('')
    const [foodSearch, setFoodSearch] = useState('')
    const [foodSearchResults, setFoodSearchResults] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        searchResults(foodSearch)
    }

    function searchApiNinja(data) {
        return http.get('/external/api-ninja-nutrition?search=' + data);
    }
    async function searchResults(req, res) {
        try {
            const searchResults = await searchApiNinja(foodAmount + ' ' + foodUnit + ' ' +foodSearch)
            setFoodSearchResults(searchResults.data[0])
            props.updateData(searchResults.data[0])
            props.updateAmount(foodAmount+' '+foodUnit)
        } catch {
            console.log('error with api ninja - nutrition')
        }
    }

    const handleAddSubmit = () => {
        props.transferButton()
        handleClose()
    }

    return (
        <>
        <Button variant="success" onClick={handleShow}>
            Food Search
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={2}><Form.Label>Amount</Form.Label></Col>
                        <Col xs={4}>
                            <Form.Group className="mb-3" controlId="formGroupAmount">
                                <Form.Control 
                                    type="number" 
                                    placeholder="Amount" 
                                    width={'100%'}
                                    defaultValue={foodAmount}
                                    onChange={e => setFoodAmount(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={1}><Form.Label>Unit</Form.Label></Col>
                        <Col xs={4}>
                            <Form.Group className="mb-3" controlId="formGroupUnit">
                                <Form.Select
                                    width={'100%'}
                                    value={foodUnit}
                                    onChange={e => setFoodUnit(e.target.value)}
                                >
                                    <option value=''></option>
                                    <option value='Cups'>Cups</option>
                                    <option value='Grams'>Grams</option>
                                    <option value='Ounces'>Ounces</option>
                                    <option value=' '>Count</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={2}><Form.Label>Search</Form.Label></Col>
                        <Col xs={7}>
                            <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Control 
                                    type="text" 
                                    width={'100%'}
                                    placeholder="Food Search" 
                                    defaultValue={foodSearch}
                                    onChange={e => setFoodSearch(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={'auto'}><Button type="submit" >Search</Button></Col>
                    </Row>
                </Form>
                <Table>
                    <tbody>
                        <tr>
                            <td>Name</td><td>{foodSearchResults.name}</td>
                        </tr>
                        <tr>
                            <td>Calories</td><td>{foodSearchResults.calories}</td>
                        </tr>
                        <tr>
                            <td>Carbs</td><td>{foodSearchResults.carbohydrates_total_g}</td>
                        </tr>
                        <tr>
                            <td>Fat</td><td>{foodSearchResults.fat_total_g}</td>
                        </tr>
                        <tr>
                            <td>Protein</td><td>{foodSearchResults.protein_g}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button onClick={handleAddSubmit}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default (FoodSearchModal)