import React, { useState } from 'react';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import http from "../../http-common";

function FoodSearchModal(props) {    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            const searchResults = await searchApiNinja(foodSearch)
            setFoodSearchResults(searchResults.data[0])
            props.updateData(searchResults.data[0])
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
                        <Col xs={9}>
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
                <p>Name - {foodSearchResults.name}, Calories - {foodSearchResults.calories}</p>
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