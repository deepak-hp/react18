import React, { useState } from "react";

export const Logo = ({ logo }) => {
    console.log("render Logo");
    return (
        <div className='logo'>
            <img src={logo} alt='Logo' width='90px' height='90px' />
        </div>
    );
};

export const SearchBar = () => {
    const [term, setTerm] = useState("");
    console.log("render searchBar");
    return (
        <div className='search'>
            <span className='searchIcon'>🔍</span>
            <input value={term} onChange={(e) => setTerm(e.target.value)} className='searchInput' type='text' placeholder='search...' />
        </div>
    );
};

export const NavItems = () => {
    console.log("render NavItems");
    return (
        <ul className='navItems'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    );
};