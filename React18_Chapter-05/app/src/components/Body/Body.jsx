import React, { useState } from "react";
import { restaurantList } from "../../constants"
import Card from "../Card";

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    console.log("render body");
    const handleSearch = (term) => {
        if (term) {
            const filteredList = restaurantList.filter((res) => {
                if (res?.data?.name?.toLowerCase()?.includes(term.trim().toLowerCase())) return res;
            })
            if (filteredList.length)
                setRestaurants(filteredList);
            else
                setRestaurants(restaurantList);

        } else
            setRestaurants(restaurantList);

    }
    return (
        <div className='section'>
            <SearchBar handleSearch={handleSearch} />
            <div className="listContainer">
                {restaurants.map((restaurant) => (
                    <Card key={restaurant?.data?.id} restaurant={restaurant?.data} />
                ))}
            </div>
        </div>
    );
};

export const SearchBar = ({ handleSearch }) => {
    const [term, setTerm] = useState("");
    console.log("render searchBar");
    return (
        <div className='search'>
            <span className='searchIcon'>🔍</span>
            <input value={term} onChange={(e) => setTerm(e.target.value)} className='searchInput' type='text' placeholder='search...' />
            <button className="searchButton" onClick={() => handleSearch(term)}>Search</button>
        </div>
    );
};

export default Body;