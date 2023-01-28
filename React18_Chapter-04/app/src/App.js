import React from 'react';
import logo from '../assets/cater_factory.jpg';
import { IMG_BASE_URL, restaurantList } from "./config"
import './App.css';

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt='Logo' width='90px' height='90px' />
        </div>
    );
};

const SearchBar = () => {
    return (
        <div className='search'>
            <span className='searchIcon'>🔍</span>
            <input className='searchInput' type='text' placeholder='search...' />
        </div>
    );
};

const NavItems = () => {
    return (
        <ul className='navItems'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    );
};

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <SearchBar />
            <NavItems />
        </div>
    );
};

const Section = () => {
    return (
        <div className='section'>

            <div className="listContainer">
                {restaurantList.map((restaurant) => (
                    <Card key={restaurant?.data?.id} restaurant={restaurant?.data} />
                ))}
            </div>
        </div>
    );
};

const Card = ({ restaurant, ...rest }) => {
    const { name, cuisines, avgRating, cloudinaryImageId, ...rest } = props;
    const imgURL = `${IMG_BASE_URL}${cloudinaryImageId}`
    return (
        <div className='cardContainer'>
            <img className="cardImage" src={imgURL} alt="" width="60px" height="40px" />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating}</h4>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='footer'>
            <div>Made with 💖 for India</div>
        </div>
    );
};

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Section />
            <Footer />
        </div>
    );
};

export default App;
