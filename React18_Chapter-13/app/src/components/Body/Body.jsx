import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { filerData } from "../../utils/helper";
import UserContext from "../../utils/UserContext";
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

    // console.log(restaurants);

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
            <div className="listContainer sm:bg-blue-50 md:bg-yellow-50 lg:bg-red-50" data-testid="res-list">
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
    const { user, setUser } = useContext(UserContext);
    const [term, setTerm] = useState("");
    console.log("render searchBar");
    return (
        <div className='search'>
            <span className='searchIcon'>🔍</span>
            <input data-testid="search-input" value={term} onChange={(e) => setTerm(e.target.value)} className='searchInput' type='text' placeholder='search...' />
            <button data-testid="search-btn" className="searchButton hover:bg-[#e76f51]" onClick={() => handleSearch(term)}>Search</button>
            <input type="text" value={user.name} onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))} />
            <input type="text" value={user.email} onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))} />
        </div>
    );
};

export default Body;