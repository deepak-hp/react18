import React, { useState } from 'react';
import logo from '../../../assets/cater_factory.jpg';
import { Logo, NavItems } from './NavBar';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='header'>
            <Logo logo={logo} />
            <NavItems />
            {isLoggedIn ?
                <button onClick={() => setIsLoggedIn(false)}>Log out</button>
                :
                <button onClick={() => setIsLoggedIn(true)}>Log In</button>
            }
        </div>
    );
};

export default Header;