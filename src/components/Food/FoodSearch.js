import React, { useState } from "react";
import http from "../../http-common";

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
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                name='foodSearch' 
                placeholder='foodSearch'
                type='text'
                value={foodSearch}
                onChange={e => setFoodSearch(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>
            <p>Name - {foodSearchResults.name}, Calories - {foodSearchResults.calories}</p>
        </div>
    )
}

export default (FoodSearch)