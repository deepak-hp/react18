import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({ logo }) => {
    console.log("render Logo");
    return (
        <Link to="/" className='logo'>
            <img src={logo} alt='Logo' width='90px' height='90px' />
        </Link>
    );
};

export const NavItems = () => {
    console.log("render NavItems");
    return (
        <ul className='flex justify-between items-center'>
            <li className="mx-4 font-medium text-[#264653]"><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
            <li className="mx-4 font-medium text-[#264653]"><Link to="/about" style={{ textDecoration: "none" }}>About</Link></li>
            <li className="mx-4 font-medium text-[#264653]"><Link to="/contact" style={{ textDecoration: "none" }}>Contact Us</Link></li>
            <li className="mx-4 font-medium text-[#264653]">Cart</li>
            <li className="mx-4 font-medium text-[#264653]"><Link to="/instamart" style={{ textDecoration: "none" }}>InstaMart</Link></li>
        </ul >
    );
};