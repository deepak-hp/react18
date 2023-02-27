import React, { useState } from 'react';
import logo from '../../../assets/cater_factory.jpg';
import useOnline from '../../utils/useOnline';
import { Logo, NavItems } from './NavBar';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    return (
        <div className='header'>
            <Logo logo={logo} />
            <NavItems />
            {isOnline ? "🟢" : "🔴"}
            {isLoggedIn ?
                <button onClick={() => setIsLoggedIn(false)}>Log out</button>
                :
                <button onClick={() => setIsLoggedIn(true)}>Log In</button>
            }
        </div>
    );
};

export default Header;