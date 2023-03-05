import React, { useState, useContext } from 'react';
import logo from '../../../assets/cater_factory.jpg';
import useOnline from '../../utils/useOnline';
import { Logo, NavItems } from './NavBar';
import UserContext from '../../utils/UserContext';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const { user } = useContext(UserContext);
    return (
        <div className='header'>
            <Logo logo={logo} />
            <NavItems />
            {isOnline ? "🟢" : "🔴"}
            <span className='p-10 font-bold text-blue-900'>{user.name}</span>
            {isLoggedIn ?
                <button onClick={() => setIsLoggedIn(false)}>Log out</button>
                :
                <button onClick={() => setIsLoggedIn(true)}>Log In</button>
            }
        </div>
    );
};

export default Header;