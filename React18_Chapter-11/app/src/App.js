import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from "react-redux"
import store from '../../../React18_Chapter-12/app/src/utils/store';

const App = () => {
    const [user, setUser] = useState({
        name: "Deepak HP",
        email: "deepak@gmail.com"
    })
    return (
        <>
            <UserContext.Provider value={{ user: {}, setUser: setUser }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </>
    );
};

export default App;
