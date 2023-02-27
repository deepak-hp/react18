import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filerData } from "../../utils/helper";
import Card from "../Card";
import Shimmer from "../Shimmer";

const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.9299299&lng=75.568101&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const getData = async () => {
        const res = await fetch(API_URL)
        const jsonRes = await res.json();
        console.log(jsonRes?.data?.cards[2]);
        let cards = []
        if (Array.isArray(jsonRes?.data?.cards)) {
            cards = jsonRes?.data?.cards.find(cards => cards?.cardType === "seeAllRestaurants")
        }
        if (cards) {
            setRestaurants(cards.data.data.cards);
            setFilteredRestaurants(cards.data.data.cards);
        }
    }


    useEffect(() => {
        getData();

        //   return () => {
        //     second
        //   }
    }, [])

    const handleSearch = (term) => {
        if (term) {
            const filteredList = filerData(term, restaurants);
            if (filteredList.length)
                setFilteredRestaurants(filteredList);
            else
                setFilteredRestaurants([]);

        } else
            setFilteredRestaurants(restaurants);

    }

    console.log(restaurants);

    if (restaurants?.length === 0) {
        return <div className="section">
            <div className="shimmerContainer">
                <Shimmer />
            </div>
        </div>

    }

    return (
        <div className='section'>
            <SearchBar handleSearch={handleSearch} />
            <div className="listContainer">
                {filteredRestaurants.length >= 0 ? filteredRestaurants.map((restaurant) => (
                    <Card key={restaurant?.data?.id} restaurant={restaurant?.data} />
                ))
                    : <h1>No Restaurant found!!</h1>
                }
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