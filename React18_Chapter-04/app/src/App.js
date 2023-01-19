import React from 'react';
import logo from '../assets/cater_factory.jpg';
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
                    <Card key={restaurant.id} id={restaurant.id} name={restaurant.name} rating={restaurant.rating} />
                ))}
            </div>
        </div>
    );
};

const Card = (props) => {
    const { id, name, rating, ...rest } = props;
    return (
        <div className='cardContainer'>
            <img src="" alt="" width="60px" height="40px" />
            <h2>{name}</h2>
            <h3>{rating}</h3>
        </div>
    )
}

const restaurantList = [
    {
        id: 'A1',
        name: 'A',
        tags: ['Burger', 'Fries'],
        rating: 4,
    },
    {
        id: 'B1',
        name: 'B',
        tags: ['Soup', 'Chicken'],
        rating: 3.5,
    },
    {
        id: 'C1',
        name: 'C',
        tags: ['Pizza', 'Soda'],
        rating: 4.5,
    },
];

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
