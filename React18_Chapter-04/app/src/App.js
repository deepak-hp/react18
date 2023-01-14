import React from 'react'
import "./App.css"

const Logo = () => {
    return (
        <div className="logo">
            Logo here
        </div>
    )
}

const SearchBar = () => {
    return (
        <div className="search">
            Searchbar here
        </div>
    )
}

const NavItems = () => {
    return (
        <ul className='navItems'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    )
}

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <SearchBar />
            <NavItems />
        </div>
    )
}

const App = () => {
    return (
        <div className='app'>
            <Header />
        </div>
    )
}

export default App