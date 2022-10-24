import React, { useState } from "react";
import http from "../../http-common";
import { Button, Form } from "react-bootstrap";

function FoodSearch(props) {
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

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label></Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Food Search" 
                    defaultValue={foodSearch}
                    onChange={e => setFoodSearch(e.target.value)}
                />
            </Form.Group>
                <Button type="submit" >Search</Button>
            </Form>
            <p>Name - {foodSearchResults.name}, Calories - {foodSearchResults.calories}</p>
        </div>
    )
}

export default (FoodSearch)